var webpack = require('webpack')
var path    = require('path')

module.exports = {
  context: __dirname + "/src",
  entry: './index.js',
  mode: 'development',
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(?:js|jsx|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      theNeukApi: path.resolve(__dirname, 'src/api/theNeukApi.js'),
      googleCalendarApi: path.resolve(__dirname, 'src/api/googleCalendarApi.js'),
      stripe: path.resolve(__dirname, 'src/api/stripe.js')
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
