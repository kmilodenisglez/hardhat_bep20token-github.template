async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Obtén el balance usando el provider
    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("Account balance:", balance.toString());

    const Token = await ethers.getContractFactory("KDG");
    const myToken = await Token.deploy();

    await myToken.waitForDeployment();

    console.log("Token Successfully Deployed!");
    console.log("Token address:", await myToken.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });