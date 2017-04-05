const webpack = require("webpack")
const configBase = require("./webpack.server.config.js")

configBase.plugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  })
]

module.exports = configBase
