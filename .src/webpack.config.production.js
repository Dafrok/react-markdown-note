const path = require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  context: path.join(__dirname, ''),
  entry: {
    app: [
      './index.js',
    ],
    vendor: [
      'wilddog'
    ]
  },
  output: {
    path: path.join(__dirname, '../static/'),
    publicPath: "http://dafrok.github.io/react-markdown-note/static",
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "react-hot!babel", include: path.join(__dirname, './')},
      { test: /\.styl$/, exclude: /node_modules/, loader: "style!css!postcss!stylus"},
      { test: /\.css$/, exclude: /node_modules/, loader: "style!css"},
      { test: /\.png$/, exclude: /node_modules/, loader: "file"},
      { test: /\.html$/, exclude: /node_modules/, loader: "html"}
    ],
    noParse: [
      // /wilddog-web\.js$/
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      title: 'React Markdown Notepad',
      template: './static/index.html',
      favicon: './static/icon.png'
    })
  ]
}
