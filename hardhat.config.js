require('dotenv').config()

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("verify_token_mumbai", "Verify Token Contract On Polygon Mumbai", async (taskArgs, hre) => {
  let tokenSymbol = "dARDX"
  let tokenName = "Diverse ARDX"
  let tokenSupply = ethers.utils.parseEther("10000000000",18)
  let tokenDecimals = 18

  await hre.run("verify:verify", {
    address: process.env.DIVERSE_ARDX_ADDRESS,
    contract: "contracts/dArdCoin.sol:dArdCoin",
    constructorArguments: [
      tokenSymbol,
      tokenName,
      tokenSupply,
      tokenDecimals
    ],
  });
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
    ethereum: {
      url: process.env.ALCHEMY_ETHEREUM_API_URL,
      chainId: 1,
      accounts: { mnemonic: process.env.MNEMONIC}
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.MUMBAI_API_KEY,
    },
  },
  gasReporter: {
    currency: 'USD',
    token: 'ETH',
    gasPriceApi: "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice",
    coinmarketcap: process.env.COINMARKETCAP_API
  }
};
