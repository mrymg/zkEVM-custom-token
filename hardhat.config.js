require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { API_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "zkEVM_testnet",
  networks: {
    hardhat: {},
    zkEVM_testnet: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};