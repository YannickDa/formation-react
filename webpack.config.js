const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./src/index.js"
  ],
  output: {
    path: path.resolve(__dirname, "build", "assets"),
    filename: "app.min.js",
    publicPath: "/assets/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: "localhost",
    port: 8080,
    hot: true,
    proxy: {
      "**": "http://localhost:3000"
    }
  }
}
