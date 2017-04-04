const path = require("path")

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/app.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
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
  }
}
