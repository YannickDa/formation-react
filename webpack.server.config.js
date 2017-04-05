const path = require("path")
const config = require("./webpack.config")

module.exports = {
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js"
  },
  target: "node",
  module: config.module,
}
