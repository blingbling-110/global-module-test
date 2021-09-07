const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            //输出标题
            title: 'Mobile',
            //输出文件名
            filename: 'index.html',
            //所引用模板文件位置
            template: './src/index.html',
            //js文件插入的位置
            inject: 'body'
        })
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                include: path.resolve(__dirname, './src/pages'),
                options: {
                    esModule: false
                }
            }
        ]
    },
    optimization: {
        //提取公共依赖模块
        splitChunks: {
            chunks: 'all'
        }
    }
};
