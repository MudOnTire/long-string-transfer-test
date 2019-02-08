const path = require('path');

module.exports = {
  entry: './front/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  }
}