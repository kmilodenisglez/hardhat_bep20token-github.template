# Running stand-alone in order to support wallets and other software

> Note: visit [hardhat config](https://hardhat.org/hardhat-runner/docs/config) and [hardhat tutorial](https://hardhat.org/tutorial/) before to proceed

This readme is only to operate on testnets (localnet or testnet)

```bash
cd contract
```
Start an HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/:
```bash
npx hardhat node
```

This will start Hardhat Network, and expose it as a JSON-RPC and WebSocket server.

Then, just connect your wallet or application to http://127.0.0.1:8545.

## Compile your contract
Run the following command to compile the contract:
```bash
npx hardhat compile
```

## Deploy lehtdrop contract to localnet
If you want to connect to `local node`, open other terminal and run `npx hardhat run` command using `--network localhost`.
```bash
npx hardhat run --network localhost scripts/deploy.js
```

The terminal should show output similar to this:

```bach
Deploying contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Account balance: 10000000000000000000000
Token Successfully Deployed!
Token address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

## To deploy KDG token (bep20) contract to `localnet`
```bash
npx hardhat run --network localhost scripts/deploy.js
```
> Note: The above command we deploy the contract on the local hardhat node

The terminal should show output similar to this:

```bach
Deploying contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Account balance: 9999999308554875000000
Token Successfully Deployed!
Token address: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
```

## To deploy KDG token (bep20) contract to testnet
To connect to `testnet` the steps are similar to those shown above, with 1 exceptions. Need to replace `--network localhost` by `--network testnet`.

For example:
```bash
npx hardhat run --network testnet scripts/deploy.js
```

> You must take into account that 1 single time you deploy on the testnet is enough, since the testnet works similar to the mainnet. 
> > In other words, unlike the local node, the testnet is a network of test nodes deployed on the internet.

## Verify a contract deployed in testnet (using hardhat-etherscan plugin)

```bash
npx buidler verify --network testnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
```

for example:

```bash
npx hardhat  verify --network testnet 0xB8924401eBD62b265b8277a7a6D6775b6DcF17FB
```

> NOTE: If you deploy in testnet you can check the deployment status here: <https://testnet.bscscan.com/>

## testing contracts
To run the tests using the local hardhat node, run the following statement:
```bash
npx hardhat test --network localhost
```

## DOC-ERRORS
<https://docs.ethers.org/v5/troubleshooting/errors/>

## DOCs
<https://hardhat.org/tutorial/creating-a-new-hardhat-project>
<https://hardhat.org/hardhat-network/docs/overview>
<https://docs.bnbchain.org/docs/hardhat-new/>
<https://docs.bnbchain.org/docs/BSCtestnet/>
<https://docs.openzeppelin.com/learn/deploying-and-interacting>
<https://ethgasstation.info/>
<https://www.quicknode.com/guides/other-chains/bnb-smart-chain/how-to-create-a-bep20-token/>
<https://betterprogramming.pub/mint-your-own-nft-using-solidity-and-hardhat-on-avalanche-fuji-test-network-71a56ef88bd3>
<https://www.quicknode.com/guides/ethereum-development/transactions/how-to-use-erc20-permit-approval/>

gas-report: <https://medium.com/@abhijeet.sinha383/how-to-calculate-gas-and-costs-while-deploying-solidity-contracts-and-functions-54007d321626>

## LIBRARIES
<https://github.com/ethereumjs/ethereumjs-monorepo>
<https://github.com/ethereumjs/ethereumjs-monorepo/tree/master/packages/util>
<https://github.com/cgewecke/hardhat-gas-reporter>
