var webpack = require('webpack')
var path    = require('path')

module.exports = {
  context: __dirname + "/src",
  entry: './index.js',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader']}
    ]
  },
  resolve: {
    alias: {
      theNeukApi: path.resolve(__dirname, 'src/api/theNeukApi.js'),
      googleCalendarApi: path.resolve(__dirname, 'src/api/googleCalendarApi.js')
    },
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src/components'),
      path.resolve(__dirname, 'src/containers'),
      path.resolve(__dirname, 'src/actions')
    ],
    extensions: [".js", ".json", ".jsx", ".scss", ".css"]
  }
}
