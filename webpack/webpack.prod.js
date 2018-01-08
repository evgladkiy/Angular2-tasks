const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    devtool: false,
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
});
