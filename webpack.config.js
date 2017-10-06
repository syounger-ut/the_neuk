var webpack = require('webpack')
var path    = require('path')

module.exports = {
  context: __dirname + "/app",
  entry: "./app",
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 8000
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']}
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app/components")
    ],
    extensions: [".js", ".json", ".jsx", ".css"]
  }
}
