const path = require("path")
const config = require("./webpack.config")

const moduleConfig = config.module
moduleConfig.rules.push({
  test: /\.html$/,
  loader: "file-loader"
})

module.exports = {
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js"
  },
  target: "node",
  module: moduleConfig,
  resolve: config.resolve
}
