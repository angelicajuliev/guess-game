const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const jsRule = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};

const cssRule = {
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
}

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    hot: true,
    host: "0.0.0.0",
  },
  module: {
    rules: [jsRule, cssRule],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ]
};
