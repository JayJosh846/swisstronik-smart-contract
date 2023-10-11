require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");


module.exports = {
  networks: {
    hardhat: {},
    mumbai: {
      url: process.env.MUMBAI_RPC,
      accounts: [process.env.ADMIN_PASS_TEST],
    },
    swisstronik: {
      url: process.env.SWISSTRONIK_RPC,
      accounts: [process.env.ADMIN_PASS_TEST],
    },
  },
  solidity: "0.8.19",
};