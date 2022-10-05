const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  entry: "./src/index.ts",
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    assetModuleFilename: "images/[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    port: 8080,
    hot: "only",
    static: {
      directory: path.join(__dirname, "./"),
      serveIndex: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
});
