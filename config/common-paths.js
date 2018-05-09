const path = require('path');

module.exports = {
  outputPath: path.resolve(__dirname, '../', 'public'),
  root: path.resolve(__dirname),
  template: './dist/index.html',
  favicon: './src/favicon.ico',
  api_service_url: 'http://localhost:3030/api/v1'
};