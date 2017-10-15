var webpack = require('webpack')
var path    = require('path')

module.exports = {
  context: __dirname + "/app",
  entry: './app.jsx',
  output: {
    path: __dirname + '/dist',
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
      "node_modules",
      path.resolve(__dirname, "app/components")
    ],
    extensions: [".js", ".json", ".jsx", ".scss", ".css"]
  }
}
