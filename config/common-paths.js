const path = require('path');

module.exports = {
  outputPath: path.resolve(__dirname, '../', 'public'),
  root: path.resolve(__dirname),
  template: './dist/index.html',
  favicon: './src/favicon.ico',
  api_service_url: 'http://localhost:3030/api/v1',
  app_contract_address: '0x4a746397E9666642E48cBC3FB6308Fb6D782C4b4', //ropsten
  eth_network: '3',
  ether_scan: 'https://ropsten.etherscan.io/'
};