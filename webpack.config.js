const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.join(__dirname, "client", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
    filename:"bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer:{
    port:3000,
  },
  resolve:{extensions:["*",".js",".jsx"]},
  module: {
    rules:[{
      test:/\.(js|jsx)$/,
      exclude:['/node_modules/','/server/','/public/'],
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  }
}
