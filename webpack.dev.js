const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.js')

const devConfig = {
  devtool: 'source-map',
  devServer: {
    port: 8000,
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  }
}

module.exports = merge(baseConfig, devConfig)