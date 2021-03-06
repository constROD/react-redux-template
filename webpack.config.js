const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const CONFIG = require('./src/config/App')

const processEnv = new webpack.DefinePlugin({
  'process.env': {
    /* APP */
    APP_ZONE: JSON.stringify(CONFIG.APP_ZONE)
  }
})

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    path: path.join(__dirname, 'client_build'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.(css|less)$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    },
    {
      test: /\.(gif|png|jpe?g|svg|jpg|png|gif)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader'
        }
      ]
    },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: { 'react-dom': '@hot-loader/react-dom' }
  },
  devServer: {
    port: CONFIG.APP_PORT,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    processEnv,
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      favicon: './src/client/shared/assets/images/dev-img.png',
      title: CONFIG.APP_NAME
    })
  ]
}