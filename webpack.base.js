const path = require("path")
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  module: {
    rules: [{
      test: /\.html$/,
      exclude: /node_modules/,
      use: ['html-loader'],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', { targets: { browsers: ['last 2 versions'] } }],
        ]
      }
    },
    {
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader'],
      })
    },
    {
      test: /\.(woff2?|ttf|eot|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: './fonts/[hash].[ext]'
        },
      }]
    },
    {
      test: /\.(jpg|png|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: './images/[hash].[ext]'
        }
      }]
    },
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      { from: './static' }
    ]),
  ]
}