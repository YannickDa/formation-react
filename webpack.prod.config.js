const configBase = require("./webpack.config.js")
const webpack = require("webpack")

configBase.entry = "./src/browser/index.js"
configBase.plugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compress: {
      warnings: false,
      drop_console: true
    },
    mangle: true
  })
]

module.exports = configBase
