const path = require('path')

//15/ Very simple webpack config just to give us the possibility to work with babel and dev server
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
