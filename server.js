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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'index.html'))
})

app.listen(port, () => console.log(`Server listening on ${port}`))
