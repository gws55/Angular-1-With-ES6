var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var browserSync = require('browser-sync');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  // historyApiFallback: true
}).listen(3001, 'localhost', (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:3001/');
});

browserSync({
  proxy: 'http://localhost:3001',
  port: 3000,
  files: [
    './src/*.html',
    './src/**/*.js'
  ]
});
