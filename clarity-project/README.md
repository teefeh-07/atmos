# Hello World Clarity Smart Contract

A simple Clarity smart contract demonstrating basic functionality on the Stacks blockchain.

## Overview

This project contains a "Hello World" smart contract built with Clarinet that showcases:

- **Greeting Management**: Set and retrieve custom greetings
- **User Interaction**: Say hello with personalized names
- **State Tracking**: Count total greetings and per-user interactions
- **Access Control**: Owner-only functions for administrative tasks
- **Input Validation**: Proper error handling for invalid inputs

## Contract Features

### Public Functions

- `say-hello(name)`: Say hello to someone and increment counters
- `set-greeting(new-greeting)`: Set a custom greeting (owner only)

### Read-Only Functions

- `get-greeting()`: Get the current greeting message
- `get-greeting-count()`: Get total number of greetings
- `get-user-greeting-count(user)`: Get greeting count for a specific user
- `get-contract-owner()`: Get the contract owner's principal

### Error Codes

- `u100`: Unauthorized (non-owner trying to set greeting)
- `u101`: Invalid name (empty string provided)

## Getting Started

### Prerequisites

- [Clarinet](https://docs.hiro.so/stacks/clarinet) v3.1.0+
- [Node.js](https://nodejs.org/) v14+
- [npm](https://www.npmjs.com/) v7+

### Installation

1. Clone the repository
2. Navigate to the clarity-project directory:
   ```bash
   cd clarity-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

#### Check Contract Syntax
```bash
clarinet check
```

#### Run Tests
```bash
npm test
```

#### Interactive Console
```bash
clarinet console
```

Example console commands:
```clarity
(contract-call? .hello-world say-hello "Alice")
(contract-call? .hello-world get-greeting)
(contract-call? .hello-world get-greeting-count)
```

## Testing

The project includes comprehensive unit tests covering:

- ✅ Default contract state
- ✅ Greeting functionality
- ✅ Counter tracking
- ✅ Access control
- ✅ Input validation
- ✅ Error handling

Run tests with:
```bash
npm test
```

## Project Structure

```
clarity-project/
├── contracts/
│   └── hello-world.clar      # Main smart contract
├── tests/
│   └── hello-world.test.ts   # Unit tests
├── settings/                 # Network configurations
├── Clarinet.toml            # Project configuration
└── package.json             # Dependencies and scripts
```

## Deployment

To deploy to different networks:

1. **Devnet** (local): Use `clarinet integrate` for local testing
2. **Testnet**: Configure testnet settings and deploy
3. **Mainnet**: Configure mainnet settings for production deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
