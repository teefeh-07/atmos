# Atmos - Stacks Blockchain Development

A repository for Stacks blockchain smart contract development using Clarity and Clarinet.

## Projects

### 🌍 [StratoSense - Atmospheric Data Registry](./clarity-project/)

A comprehensive Clarity smart contract for atmospheric data management:
- Dataset registration with comprehensive metadata
- Geographic coordinate validation (latitude/longitude)
- Altitude range validation and management
- Ownership transfer and access control
- Metadata freezing and update mechanisms
- IPFS integration for data storage

**Features:**
- Register atmospheric datasets with location and altitude data
- Transfer dataset ownership between users
- Freeze metadata to prevent unauthorized changes
- Query datasets by owner and public availability
- Comprehensive input validation and error handling
- Full test coverage (13/13 tests passing)

## Getting Started

1. **Install Clarinet** (Stacks development environment):
   ```bash
   # Linux
   wget -nv https://github.com/hirosystems/clarinet/releases/download/v3.1.0/clarinet-linux-x64-glibc.tar.gz -O clarinet-linux-x64.tar.gz
   tar -xf clarinet-linux-x64.tar.gz
   chmod +x ./clarinet
   sudo mv ./clarinet /usr/local/bin
   ```

2. **Navigate to a project**:
   ```bash
   cd clarity-project
   ```

3. **Install dependencies and run tests**:
   ```bash
   npm install
   npm test
   ```

## Development Tools

- **Clarinet**: Stacks smart contract development environment
- **Clarity**: Smart contract programming language for Stacks
- **Vitest**: Testing framework for contract unit tests
- **TypeScript**: Type-safe testing and development

## Repository Structure

```
atmos/
├── clarity-project/          # StratoSense atmospheric data registry
│   ├── contracts/           # Clarity smart contracts
│   │   └── atmos.clar      # Main data registry contract
│   ├── tests/              # Comprehensive unit tests
│   │   └── atmos.test.ts   # Test suite (13 tests)
│   ├── settings/           # Network configurations
│   └── README.md           # Project-specific documentation
└── README.md               # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Develop your smart contracts
4. Add comprehensive tests
5. Submit a pull request

## Resources

- [Stacks Documentation](https://docs.stacks.co/)
- [Clarity Language Reference](https://docs.stacks.co/clarity/)
- [Clarinet Documentation](https://docs.hiro.so/stacks/clarinet)
- [Stacks Blockchain](https://www.stacks.co/)
