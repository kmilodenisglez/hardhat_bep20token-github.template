# Lehtdrop contract

> Note: visit [hardhat config](https://hardhat.org/hardhat-runner/docs/config) and [hardhat deploy](https://hardhat.org/tutorial/deploying-to-a-live-network) \before to proceed 

Enables you to send your `KDG` tokens to hundreds of designated addresses at a time.

## How long can the operation take?
It depends on the network congestion and gas price. It typically takes 2 to 5 minutes.

## How much does it cost?
It depends on the number of addresses and the number of tokens to be sent.

## What is the maximum number of addresses you can send to at the same time?
Limitations are unknown, it is recommended to create batches of small addresses (around 200 destination addresses) for transfers.

## Compile

Run the following command to compile the contract:
```bash
npx hardhat compile
```

## Deploy to mainnet

Then, to deploy the contract, run the command:
```bash
npx hardhat run --network mainnet scripts/deploy.js
```

The terminal should show output similar to this:

```bach
Deploying contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Account balance: 10000000000000000000000
Token Successfully Deployed!
Token address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

## Verify using hardhat-etherscan plugin

```bash
npx buidler verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
```

example:

```bash
npx hardhat verify --network mainnet 0xB8924401eBD62b265b8277a7a6D6775b6DcF17FB
```

Congratulations! You have successfully deployed BEP20 Smart Contract in mainnet. Now you can interact with the Smart Contract.

You can check the deployment status here: <https://bscscan.com/>

## DOCs
