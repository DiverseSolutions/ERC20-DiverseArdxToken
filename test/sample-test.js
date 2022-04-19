const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const dArdCoin = await hre.ethers.getContractFactory("dArdCoin");

    let tokenName = "ArdCoin"
    let tokenSymbol = "ARDX"
    let tokenDecimals = 2
    let tokenSupply = hre.ethers.utils.parseUnits("10000000000",2)

    const tokenInstance = await dArdCoin.deploy(tokenSymbol,tokenName,tokenSupply,tokenDecimals);
    await tokenInstance.deployed()

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
