const {ethers} = require("hardhat");

async function mintExample() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("1. Account balance:", (await deployer.getBalance()).toString());
    console.log("2. Account balance:", (await ethers.provider.getBalance(deployer.address)));

    // const Token = await ethers.getContractFactory("KDG"); //Replace with name of your smart contract
    // attach to token contract address deployed
    // const myToken = await Token.attach('0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512')
    const myToken = await ethers.getContractAt("KDG", '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512', deployer)
    let minted = await myToken.mint('100000000000000000000')
    // let owner =  await myToken.transfer('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', 20)
    // let transfer = await myToken.transferOwnership('0xDB1ee39167071d0B51A00CF0c009c6Ee9f1f2F61')

    console.log("minted: ", minted)
    console.log("2. Account balance:", (await ethers.provider.getBalance(deployer.address)));
}

mintExample()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
