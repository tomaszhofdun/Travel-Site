const path = require('path');
const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');

 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',

   module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],


   
 });