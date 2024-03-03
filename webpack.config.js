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
  devtool: "source-map",
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: "ts-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" },
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
      },
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
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx", ".scss", ".css"]
  }
}
