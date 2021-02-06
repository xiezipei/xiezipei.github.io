const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    mode: 'development',    // 开发模式

    entry: {
        index: './src/index.js',
    },

    devtool: 'inline-source-map',   // 启用sourcemap，请注意不要在生产环境使用！！！

    devServer: {
        contentBase: './dist',  // 将 dist 目录下的文件 serve 到 localhost:8080 下
        hot: true,
    },

    plugins: [
        new CleanWebpackPlugin(),   // 清理`/dist`文件夹
        new HtmlWebpackPlugin({     // 动态生成`index.html`文件
            title: 'Caching',
        })
    ],

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },

    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    }

};