var webpack = require("webpack");
var path    = require("path");

module.exports = {
  entry: [
    "script!jquery/dist/jquery.min.js",
    'script!foundation-sites/dist/js/foundation.min.js',
    "./app/app.jsx"
  ],
  externals: {
    jquery: "jQuery"
  },
  plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jquery": "jquery"
    })
  ],
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      "node_modules",
      "./app/components"
    ],
    alias: {
      applicationStyles: "app/styles/app.scss"
    },
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: [ "react", "env", "stage-0" ]
        },
        test: /\.jsx?$/,
        excludes: /(node_modules|bower_components)/
      },{
        loader: 'style-loader!css-loader',
        test: /\.css$/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ],
  },
  devtool: "cheap-module-eval-source-map"
};
