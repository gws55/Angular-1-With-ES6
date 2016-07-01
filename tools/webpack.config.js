var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: [
    'webpack/hot/only-dev-server', 
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'http://localhost:3000/src/',
    filename: 'bundle.js',
    devtoolLineToLine: true,
    sourceMapFilename: "bundle.js.map",
    pathinfo: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/, 
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpe?g|png|gif)$/i, 
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  }
};
