# StratoSense - Atmospheric Data Registry

A Clarity smart contract for registering and managing atmospheric datasets on the Stacks blockchain.

## Overview

This project contains the **StratoSense** data registry contract built with Clarinet that provides:

- **Dataset Registration**: Register atmospheric datasets with comprehensive metadata
- **Ownership Management**: Transfer dataset ownership between principals
- **Access Control**: Owner-only functions for dataset management
- **Metadata Management**: Update and freeze dataset metadata
- **Data Discovery**: Query datasets by owner and check public availability
- **Input Validation**: Comprehensive validation for geographic coordinates and altitude ranges

## Contract Features

### Public Functions

- `register-dataset(...)`: Register a new atmospheric dataset with metadata
- `update-dataset-metadata(...)`: Update dataset metadata (owner only, if not frozen)
- `freeze-dataset-metadata(dataset-id)`: Permanently freeze dataset metadata (owner only)
- `transfer-dataset(dataset-id, new-owner)`: Transfer dataset ownership
- `set-contract-admin(new-admin)`: Set contract administrator (admin only)

### Read-Only Functions

- `get-dataset(dataset-id)`: Get complete dataset information
- `get-datasets-by-owner(owner)`: Get all dataset IDs owned by a principal
- `get-dataset-count()`: Get total number of registered datasets
- `is-dataset-public(dataset-id)`: Check if a dataset is publicly accessible
- `get-contract-admin()`: Get the contract administrator

### Error Codes

- `u401`: Not authorized (insufficient permissions)
- `u404`: Dataset not found
- `u400`: Invalid parameters (coordinates, altitude, etc.)
- `u403`: Metadata frozen (cannot be modified)

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
;; Register a new dataset
(contract-call? .atmos register-dataset
  u"Temperature Data"
  u"Atmospheric temperature measurements"
  u"temperature"
  u1640995200
  u1000
  u5000
  40000000
  -74000000
  "QmTestHash123"
  true)

;; Get dataset information
(contract-call? .atmos get-dataset u1)

;; Check dataset count
(contract-call? .atmos get-dataset-count)
```

## Testing

The project includes comprehensive unit tests covering:

- ✅ Dataset registration and validation
- ✅ Metadata management and freezing
- ✅ Ownership and access control
- ✅ Geographic coordinate validation
- ✅ Altitude range validation
- ✅ Error handling and edge cases
- ✅ Data retrieval and querying

Run tests with:
```bash
npm test
```

## Project Structure

```
clarity-project/
├── contracts/
│   └── atmos.clar           # StratoSense data registry contract
├── tests/
│   └── atmos.test.ts        # Comprehensive unit tests
├── settings/                # Network configurations
├── Clarinet.toml           # Project configuration
└── package.json            # Dependencies and scripts
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
