# Atmos - Decentralized Atmospheric Data Registry

Atmos is a professional-grade decentralized application (dApp) built on the Stacks blockchain, designed to store, verify, and manage atmospheric and climate data. It leverages Clarity 4 smart contracts for robust and secure data registry and features a modern, high-performance web interface.

## Features

-   **Clarity 4 Smart Contract**: Utilizes the latest Clarity features for efficient data management.
-   **Decentralized Registry**: Immutable storage of dataset metadata.
-   **Professional UI**: A sleek, dark-moded React application powered by Vite.
-   **Administrative Control**: Capabilities for pausing contracts and managing dataset status.

## Tech Stack

-   **Smart Contracts**: Clarity (v4), Clarinet SDK
-   **Frontend**: React, Vite, TypeScript, TailwindCSS (via custom CSS variables)
-   **Testing**: Vitest, Clarinet SDK

## Prerequisites

-   Node.js (v18+)
-   Clarinet (latest version supporting Epoch 3.0)

## Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Tests**
    ```bash
    npm run test
    ```

3.  **Start Web Interface**
    ```bash
    npm run dev
    ```

4.  **Deploy Contracts**
    ```bash
    clarinet integrate
    ```

## Project Structure

-   `/contracts`: Clarity smart contracts (`atmos.clar`)
-   `/src`: React frontend source code
-   `/tests`: Vitest unit tests
-   `Clarinet.toml`: Network and contract configuration

## License

MIT
