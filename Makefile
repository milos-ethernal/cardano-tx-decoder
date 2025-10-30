# Cardano Transaction Helper Makefile

.PHONY: help build run clean install deps test build-docs serve-docs dev

# Default target
help:
	@echo "Available targets:"
	@echo "  build    - Build the application"
	@echo "  run      - Run the application"
	@echo "  install  - Install dependencies"
	@echo "  clean    - Clean build artifacts"
	@echo "  test     - Test the application"
	@echo "  deps     - Download dependencies"
	@echo "  build-docs - Build React app into docs/"
	@echo "  serve-docs - Serve the static docs/ site on http://localhost:3000"

# Install dependencies
install deps:
	@echo "Installing dependencies..."
	go mod download
	go mod tidy

# Build the application
build: deps
	@echo "Building application..."
	go build -o tx-helper main.go

# Run the application
run: build
	@echo "Starting Cardano Transaction Helper..."
	@echo "Open http://localhost:8080 in your browser"
	./tx-helper

# Run without building (for development)
dev: deps
	@echo "Starting in development mode..."
	@echo "Open http://localhost:8080 in your browser"
	go run main.go

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	rm -f tx-helper
	go clean

# Test the application
test: deps
	@echo "Running tests..."
	go test ./...

# Check if cardano-cli is available
check-cli:
	@echo "Checking if cardano-cli is available..."
	@which cardano-cli > /dev/null || (echo "Error: cardano-cli not found in PATH. Please install Cardano CLI tools." && exit 1)
	@echo "cardano-cli found: $$(which cardano-cli)"

# Full setup (install deps, check cli, build)
setup: deps check-cli build
	@echo "Setup complete! Run 'make run' to start the application."

# Build docs
build-docs:
	@echo "Building docs..."
	npm install
	npm run build

# Serve docs
serve-docs:
	@echo "Serving docs/ at http://localhost:3000 ..."
	@echo "Press Ctrl+C to stop."
	npx serve docs
