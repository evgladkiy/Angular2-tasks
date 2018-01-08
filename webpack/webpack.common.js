const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main',
        vendor: './src/vendor',
        polyfills: './src/polyfills',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
        resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                loaders: 'awesome-typescript-loader',
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                            },
                        },
                    ],
                    fallback: 'style-loader',
                }),
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
             },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([{ from: './src/index.html' }]),
        new ExtractTextPlugin('css/styles.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
    ],
};
