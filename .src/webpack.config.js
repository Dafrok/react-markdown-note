const path = require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  context: path.join(__dirname, ''),
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',//资源服务器地址
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  output: {
    path: path.join(__dirname, '../static/'),
    publicPath: "http://localhost:3000/static",
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "react-hot!babel", include: path.join(__dirname, '../')},
      { test: /\.styl$/, exclude: /node_modules/, loader: "style!css!postcss!stylus"}
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      title: 'React Markdown Notepad',
      template: './templates/index.html'
    })
  ]
}
