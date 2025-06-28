# Atmos - Stacks Blockchain Development

A repository for Stacks blockchain smart contract development using Clarity and Clarinet.

## Projects

### 🚀 [Hello World Contract](./clarity-project/)

A comprehensive Clarity smart contract demonstrating:
- Basic smart contract functionality
- State management and data storage
- User interaction and access control
- Comprehensive testing with Clarinet SDK
- Error handling and input validation

**Features:**
- Customizable greeting messages
- User interaction tracking
- Owner-only administrative functions
- Full test coverage (11/11 tests passing)

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
├── clarity-project/          # Hello World smart contract project
│   ├── contracts/           # Clarity smart contracts
│   ├── tests/              # Unit tests
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
