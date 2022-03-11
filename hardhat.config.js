require('dotenv').config()

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

task("verify_token_mumbai", "Verify Token Contract On Polygon Mumbai", async (taskArgs, hre) => {
  await hre.run("verify:verify", {
    address: process.env.DIVERSE_USDC_ADDRESS,
    contract: "contracts/DiverseUsdcToken.sol:DiverseUsdcToken",
    constructorArguments: [
      process.env.DIVERSE_USDC_ADDRESS
    ],
  });
});

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.5.11",
  networks: {
    "truffle-dashboard": {
      url: "http://localhost:24012/rpc"
    },
    polygonMumbai: {
      url: process.env.ALCHEMY_MUMBAI_API_URL,
      chainId: 80001,
      accounts: { mnemonic: process.env.MNEMONIC}
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.MUMBAI_API_KEY,
    },
  },
};
