const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    watchFiles: ["./src/*.html", "./src/*.js"]
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: 'http://localhost:8080/',
      host: 'localhost',
      port: 3000,
    }),
  ]
});