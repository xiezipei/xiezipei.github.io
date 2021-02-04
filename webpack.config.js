const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/pirnt.js',
  },
  plugins: [
    new CleanWebpackPlugin(),   // 清理`/dist`文件夹
    new HtmlWebpackPlugin({     // 动态生成`index.html`文件
        title: '管理输出',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};