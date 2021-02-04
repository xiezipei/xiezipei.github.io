const path = require('path');

module.exports = {
  entry: './src/index.js',  // 入口
  output: {     // 输出
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {     // 模块
      rules: [
          {
              test: /\.css$/,   // 处理css文件
              use: [
                  'style-loader',
                  'css-loader',
              ],
          },
          {
              test: /\.(png|svg|jpg|gif)$/, // 处理图片
              use: [
                  'file-loader',
              ],
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/,  // 处理字体
              use: [
                'file-loader',
              ]
          },
      ],
  },
};