package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"os/exec"

	"github.com/gorilla/mux"
)

type TransactionData struct {
	Type        string `json:"type"`
	Description string `json:"description"`
	CborHex     string `json:"cborHex"`
}

type DecodedResponse struct {
	Success bool   `json:"success"`
	Data    string `json:"data,omitempty"`
	Error   string `json:"error,omitempty"`
}

func main() {
	r := mux.NewRouter()

	// Serve static files
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

	// Routes
	r.HandleFunc("/", homeHandler).Methods("GET")
	r.HandleFunc("/decode", decodeHandler).Methods("POST")

	fmt.Println("Starting server on :8080")
	fmt.Println("Open http://localhost:8080 in your browser")
	log.Fatal(http.ListenAndServe(":8080", r))
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cardano Transaction Decoder</title>
    <link rel="stylesheet" href="/static/style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Cardano Transaction Decoder</h1>
            <p>Paste your CBOR hex string to decode the transaction</p>
        </header>
        
        <div class="form-container">
            <form id="decodeForm">
                <div class="input-group">
                    <label for="cborHex">CBOR Hex String:</label>
                    <textarea id="cborHex" name="cborHex" placeholder="Paste your CBOR hex string here..." rows="4"></textarea>
                </div>
                <button type="submit">Decode Transaction</button>
            </form>
        </div>
        
        <div id="result" class="result-container" style="display: none;">
            <h3>Decoded Transaction:</h3>
            <pre id="decodedOutput"></pre>
        </div>
        
        <div id="error" class="error-container" style="display: none;">
            <h3>Error:</h3>
            <pre id="errorOutput"></pre>
        </div>
    </div>
    
    <script>
        document.getElementById('decodeForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const cborHex = document.getElementById('cborHex').value.trim();
            if (!cborHex) {
                alert('Please enter a CBOR hex string');
                return;
            }
            
            try {
                const response = await fetch('/decode', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ cborHex: cborHex })
                });
                
                const result = await response.json();
                
                // Hide previous results
                document.getElementById('result').style.display = 'none';
                document.getElementById('error').style.display = 'none';
                
                if (result.success) {
                    document.getElementById('decodedOutput').textContent = result.data;
                    document.getElementById('result').style.display = 'block';
                } else {
                    document.getElementById('errorOutput').textContent = result.error;
                    document.getElementById('error').style.display = 'block';
                }
            } catch (error) {
                document.getElementById('errorOutput').textContent = 'Network error: ' + error.message;
                document.getElementById('error').style.display = 'block';
            }
        });
    </script>
</body>
</html>`

	t, err := template.New("home").Parse(tmpl)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "text/html")
	t.Execute(w, nil)
}

func decodeHandler(w http.ResponseWriter, r *http.Request) {
	var req struct {
		CborHex string `json:"cborHex"`
	}

	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		respondWithError(w, "Invalid JSON request", http.StatusBadRequest)
		return
	}

	if req.CborHex == "" {
		respondWithError(w, "CBOR hex string is required", http.StatusBadRequest)
		return
	}

	// Create a temporary file with the transaction data
	tempFile, err := createTempTransactionFile(req.CborHex)
	if err != nil {
		respondWithError(w, "Failed to create temporary file: "+err.Error(), http.StatusInternalServerError)
		return
	}
	defer os.Remove(tempFile)

	// Run cardano-cli transaction view
	cmd := exec.Command("cardano-cli", "transaction", "view", "--tx-file", tempFile)
	output, err := cmd.CombinedOutput()
	if err != nil {
		respondWithError(w, "Failed to decode transaction: "+string(output), http.StatusInternalServerError)
		return
	}

	// Try to pretty-print the JSON
	var jsonData interface{}
	if err := json.Unmarshal(output, &jsonData); err != nil {
		// If it's not valid JSON, return the raw output
		respondWithSuccess(w, string(output))
		return
	}

	prettyJSON, err := json.MarshalIndent(jsonData, "", "  ")
	if err != nil {
		respondWithSuccess(w, string(output))
		return
	}

	respondWithSuccess(w, string(prettyJSON))
}

func createTempTransactionFile(cborHex string) (string, error) {
	// Create transaction data structure
	txData := TransactionData{
		Type:        "Unwitnessed Tx BabbageEra",
		Description: "Ledger Cddl Format",
		CborHex:     cborHex,
	}

	// Marshal to JSON
	jsonData, err := json.Marshal(txData)
	if err != nil {
		return "", err
	}

	// Create temporary file
	f, err := os.CreateTemp("", "cardano-tx-*.raw")
	if err != nil {
		return "", err
	}

	// Write JSON data to file
	if _, err := f.Write(jsonData); err != nil {
		f.Close()
		return "", err
	}

	f.Close()
	return f.Name(), nil
}

func respondWithSuccess(w http.ResponseWriter, data string) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(DecodedResponse{
		Success: true,
		Data:    data,
	})
}

func respondWithError(w http.ResponseWriter, errorMsg string, statusCode int) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	json.NewEncoder(w).Encode(DecodedResponse{
		Success: false,
		Error:   errorMsg,
	})
}
