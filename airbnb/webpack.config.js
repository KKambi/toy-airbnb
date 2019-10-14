const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
    },
    output: {
        path: path.resolve(__dirname, 'public/javascripts'),  //산출물이 위치할 경로
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'eslint-loader',
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};