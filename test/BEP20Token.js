const {ethers} = require("hardhat");
// We import Chai to use its asserting functions here.
const {expect} = require("chai");
const BN = require("bignumber.js");
// We use `loadFixture` to share common setups (or fixtures) between tests.
// Using this simplifies your tests and makes them run faster, by taking
// advantage of Hardhat Network's snapshot functionality.
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");

const name = "KDG"
const symbol = "KDG"
let _totalSupply = new BN('15000000000000000');

// `describe` is a Mocha function that allows you to organize your tests.
// Having your tests organized makes debugging them easier. All Mocha
// functions are available in the global scope.
//
// `describe` receives the name of a section of your test suite, and a
// callback. The callback must define the tests of that section. This callback
// can't be an async function.
describe("KDG Token contracts", function () {
    let myTokenFactory;
    let myToken;

    // We define a fixture to reuse the same setup in every test. We use
    // loadFixture to run this setup once, snapshot that state, and reset Hardhat
    // Network to that snapshot in every test.
    async function addressesFixture() {
        const [owner, addr1, addr2] = await ethers.getSigners();
        console.log("Account balance:", (await owner.getBalance()).toString());

        // Fixtures can return anything you consider useful for your tests
        return {owner, addr1, addr2};
    }

    before(async () => {
        // Get the TokenFactory here.
        myTokenFactory = await ethers.getContractFactory("KDG");
        // To deploy our contract, we just have to call Token.deploy() and await
        // its deployed() method, which happens once its transaction has been
        // mined.
        myToken = await myTokenFactory.deploy()
        await myToken.deployed()
    })

    // You can nest describe calls to create subsections.
    describe("Deployment", function () {
        // `it` is another Mocha function. This is the one you use to define each
        // of your tests. It receives the test name, and a callback function.
        //
        // If the callback function is async, Mocha will `await` it.
        it("Should set the right owner", async function () {
            // We use loadFixture to set up our environment, and then assert that
            // things went well
            const [owner] = await ethers.getSigners();
            console.log("Token address:", myToken.address);
            console.log("Owner address:", owner.address);

            // `expect` receives a value and wraps it in an assertion object. These
            // objects have a lot of utility methods to assert values.

            // This test expects the owner variable stored in the contract to be
            // equal to our Signer's owner.
            expect(await myToken.owner()).to.equal(owner.address);
        });

        it("Should have correct name", async () => {
            expect(await myToken.name()).to.equal(name)
        })

        it("Should have correct symbol", async () => {
            expect(await myToken.symbol()).to.equal(symbol)
        })

        it("Should have correct initial supply", async () => {
            const ts = await myToken.totalSupply()
            expect(ts).to.equal(_totalSupply)
        })

        it("Should have 8 decimals", async () => {
            expect(await myToken.decimals()).to.equal(8)
        })

        it("Should mint the token", async function () {
            const {owner} = await loadFixture(addressesFixture);
            console.log("Contract address:", myToken.address);
            console.log("Owner address:", owner.address);

            let totalSupply = await myToken.totalSupply()

            // increment supply initial
            await myToken.mint('100000000000000000000')

            // check
            let newSupply = new BN(totalSupply.toString())
                .plus(100000000000000000000)
                .toString(10);
            expect(await myToken.totalSupply()).to.equal(newSupply);
        })

        it("Should assign the total supply of tokens to the owner", async function () {
            const {owner} = await loadFixture(addressesFixture);
            let totalSupply = await myToken.totalSupply()
            console.log("Total Supply:", totalSupply);

            const ownerBalance = await myToken.balanceOf(owner.address);
            expect(await myToken.totalSupply()).to.equal(ownerBalance);
        });


        describe("Transactions", function () {
            it("Should transfer tokens between accounts", async function () {
                const {owner, addr1, addr2} = await loadFixture(
                    addressesFixture
                );

                console.log("Transfer 50 tokens from owner to addr1!");
                await expect(
                    myToken.transfer(addr1.address, 50)
                ).to.changeTokenBalances(myToken, [owner, addr1], [-50, 50]);

                console.log("Transfer 50 tokens from addr1 to addr2!");
                // We use .connect(signer) to send a transaction from another account
                await myToken.connect(addr1).transfer(addr2.address, 50);
                expect(await myToken.balanceOf(addr2.address)).to.equal(50);
                console.log("Successful Transfer!");
            });
        })

        it("Should emit Transfer events", async function () {
            const {owner, addr1, addr2} = await loadFixture(
                addressesFixture
            );

            // Transfer 50 tokens from owner to addr1
            await expect(myToken.transfer(addr1.address, 50))
                .to.emit(myToken, "Transfer")
                .withArgs(owner.address, addr1.address, 50);

            // Transfer 50 tokens from addr1 to addr2
            // We use .connect(signer) to send a transaction from another account
            await expect(myToken.connect(addr1).transfer(addr2.address, 50))
                .to.emit(myToken, "Transfer")
                .withArgs(addr1.address, addr2.address, 50);
        });

        it("Should fail if sender doesn't have enough tokens", async function () {
            const {owner, addr1} = await loadFixture(
                addressesFixture
            );
            const initialOwnerBalance = await myToken.balanceOf(owner.address);

            // Try to send 1 token from addr1 (0 tokens) to owner.
            // `require` will evaluate false and revert the transaction.
            await expect(
                myToken.connect(addr1).transfer(owner.address, 1)
            ).to.be.revertedWith("BEP20: transfer amount exceeds balance");

            // Owner balance shouldn't have changed.
            expect(await myToken.balanceOf(owner.address)).to.equal(
                initialOwnerBalance
            );
        });
    })
});