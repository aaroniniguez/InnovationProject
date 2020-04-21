const path = require("path");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: [
      "@babel/polyfill", "./src/index.js"
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ]
  },
  resolve: { extensions: [".ts", ".tsx", "*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "public/"),
    port: 8001,
    publicPath: "http://localhost:8001/dist/",
    historyApiFallback: true,
    // hotOnly: true,
    // hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({path: ".env"})
  ]
};