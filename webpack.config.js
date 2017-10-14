var webpack = require('webpack')
var path    = require('path')

module.exports = {
  context: __dirname + "/app",
  entry: "./app",
  output: {
    path: __dirname + '/public',
    publicPath: '/**',
    filename: 'bundle.js'
  },
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
    extensions: [".js", ".json", ".jsx", ".scss"]
  }
}
