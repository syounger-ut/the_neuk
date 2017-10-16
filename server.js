const express = require('express')
const path    = require('path')
const webpack = require('webpack')
const port    = process.env.PORT || 8000;

const app     = express()

const webpackMiddleware = require("webpack-dev-middleware")
const webpackConfig     = require('./webpack.config.js')

app.use(webpackMiddleware(
  webpack(webpackConfig),
  { publicPath: '/' }
))

// Tells express where the static assets are located e.g. css
app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => console.log(`Server listening on ${port}`))
