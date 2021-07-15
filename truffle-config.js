const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "a3e70735b4.....";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/a3e70735b4cf401b9148e1fea8f5a288");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  },
  mocha: {
  },
  compilers: {
    solc: {
      version: "0.8.5",
    }
  },
  db: {
    enabled: false
  }
};