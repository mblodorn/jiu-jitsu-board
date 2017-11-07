const CleanWebpackPlugin = require("clean-webpack-plugin")
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const ImageminPlugin = require('imagemin-webpack-plugin').default
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.js')

const prodConfig = {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new OptimizeCSSAssets(),
    new UglifyJSPlugin(),
    new ImageminPlugin()
  ]
}

module.exports = merge(baseConfig, prodConfig)