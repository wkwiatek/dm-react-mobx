const path = require('path')

const config = {
  devtool: 'source-map',
  entry: {
    'app': './src/index'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  }
}

module.exports = config
