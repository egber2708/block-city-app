BLOCKCITY TRACKER - Citizen Registration Project
Project Description
BLOCKCITY TRACKER is a citizen registration application that utilizes blockchain technology to securely store and manage citizen data. The project leverages the Metamask wallet for transaction signing and interaction with the Ethereum blockchain.

Requirements
Node.js v21
React 18
Usage Instructions
Ensure you have Node.js v21 installed.
Clone the repository.
Install the necessary dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm run dev
Metamask Integration
This project uses Metamask as the wallet provider. All transactions must be signed via the Metamask wallet. Metamask is an extension for accessing EVM-compatible chains. You can download and install Metamask from here.

Artifacts
For the task implementation, you may need the following artifacts:

Smart contract ABI file: ABI File
Smart contract source code: Source Code
Deployed smart contract (Sepolia Testnet): Etherscan Link
TODO
Fix some mobile views.
Use React Suspense for better data fetching handling.
Refactor some components for better readability and maintenance.
Include variables and mixin styles inside some components to create a single source of truth for colors.
Create a test folder and complete simple tests for components and functionality.
Findings and Recommendations
City Storage:

The smart contract saves the city as an indexed string, making it impossible to show the exact city that was registered. Currently, we are using a hex representation for this purpose.
Event Handling:

The smart contract uses events to deliver user information. Depending on the provider, using events to retrieve all information may cause issues with the number of blocks. For example, Metamask suggests not querying more than 100,000 blocks at a time.
Provider Type:

As the project subscribes to events, the provider should be of type WS (WebSocket) and not HTTP to ensure real-time updates and better handling of blockchain events.
Contact
For any questions or further assistance, please contact the project maintainers.