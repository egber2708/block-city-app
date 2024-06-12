# BLOCKCITY TRACKER - Citizen Registration Project

## Project Description

BLOCKCITY TRACKER is a citizen registration application that utilizes blockchain technology to store and manage citizen data securely. The project leverages the Metamask wallet for transaction signing and interaction with the Ethereum blockchain.

## Requirements

- Node.js v21
- React 18

## Usage Instructions

1. Ensure you have Node.js v21 installed.
2. Clone the repository.
3. Install the necessary dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Metamask Integration

This project uses Metamask as the wallet provider. All transactions must be signed via the Metamask wallet. Metamask is an extension for accessing EVM-compatible chains. You can download and install Metamask from [here](https://metamask.io/).

## Artifacts

For the task implementation, you may need the following artifacts:

- **Smart contract ABI file**: [ABI File](https://gist.github.com/IhorYermakovSecurrency/6b246d769154b145d730b98b5b61e883)
- **Smart contract source code**: [Source Code](https://gist.github.com/IhorYermakovSecurrency/651202f46b90be531e95bca2b41d7571)
- **Deployed smart contract (Sepolia Testnet)**: [Etherscan Link](https://sepolia.etherscan.io/address/0xa011799d9467d2b33768fb1a3512f1b468b87e96)

## TODO

- Fix some mobile views.
- Use React Suspense for better data fetching handling.
- Refactor some components for better readability and maintenance.
- Include variables and mixing styles inside some components to create a single source of truth for colors.
- Create a test folder and complete simple tests for components and functionality.

## Findings and Recommendations

1. **City Storage**:
    - The smart contract saves the city as an indexed string, making it impossible to show the exact city registered. Currently, we are using a hex representation for this purpose.

2. **Event Handling**:
    - The smart contract uses events to deliver user information. Depending on the provider, using events to retrieve all information may cause issues with the number of blocks. For example, Metamask suggests not querying more than 100,000 blocks at a time.

3. **Provider Type**:
    - As the project subscribes to events, the provider should be of type WS (WebSocket) and not HTTP to ensure real-time updates and better handling of blockchain events.
  
## GRAPH DETAILS:
- [https://excalidraw.com/#json=UtM_hNlWhBydzKbIM-0fz,zVhu6zHCYembraAXeD1BKA](https://excalidraw.com/#json=UtM_hNlWhBydzKbIM-0fz,zVhu6zHCYembraAXeD1BKA)

## Contact

For any questions or further assistance, please contact the project maintainers.

---

By following these instructions and guidelines, you can set up and run the BLOCKCITY TRACKER project smoothly. Happy coding!
