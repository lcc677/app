const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    clean: true,
    path: path.join(__dirname, 'dist'),
  },
  // devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
};
