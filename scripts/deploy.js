async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("KDG"); //Replace with name of your smart contract
    const myToken = await Token.deploy();

    await myToken.deployed();

    console.log("Token Successfully Deployed!");
    console.log("Token address:", myToken.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  