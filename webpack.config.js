const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',    // 开发模式

    entry: {
        // 在入口处理重复依赖，或者使用下面的`SplitChunksPlugin`
        // index: { import: './src/index.js', dependOn: 'shared' },
        // another: { import: './src/another-module.js', dependOn: 'shared' },
        // shared: 'lodash',

        // 在入口不处理重复依赖
        index: './src/index.js',
        another: './src/another-module.js'
    },

    devtool: 'inline-source-map',   // 启用sourcemap，请注意不要在生产环境使用！！！

    // webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，
    // 然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。
    // 如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 publicPath 选项进行修改。
    devServer: {
        contentBase: './dist',  // 将 dist 目录下的文件 serve 到 localhost:8080 下
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
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
};