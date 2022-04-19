const hre = require("hardhat");

async function main() {
  const [ deployer ] = await hre.ethers.getSigners();

  const dArdCoin = await hre.ethers.getContractFactory("dArdCoin");

  let tokenName = "ArdCoin"
  let tokenSymbol = "ARDX"
  let tokenDecimals = 2
  let tokenSupply = hre.ethers.utils.parseEther("10000000000",18)

  const tokenInstance = await dArdCoin.deploy(tokenSymbol,tokenName,tokenSupply,tokenDecimals);

  console.log("Diverse ARDX Token deployed to:", tokenInstance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

