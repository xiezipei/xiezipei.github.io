const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/pirnt.js',
  },
  output: {     // 输出
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};