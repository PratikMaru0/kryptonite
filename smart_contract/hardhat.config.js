// https://eth-ropsten.alchemyapi.io/v2/fE8-7Rg5BZK3d6lwWsxKaJgu0f-tni5z


require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/fE8-7Rg5BZK3d6lwWsxKaJgu0f-tni5z',
      accounts: ['720c60d4bd15f83e266689be92e6b138699f64ded5b3407e394c67df6070a049']
    }
  }

}