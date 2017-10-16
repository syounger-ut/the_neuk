var webpack = require('webpack')
var path    = require('path')

module.exports = {
  context: __dirname + "/src",
  entry: './index.jsx',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']}
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, "src/components"),
      path.resolve(__dirname, "src/containers")
    ],
    extensions: [".js", ".json", ".jsx", ".scss", ".css"]
  }
}
