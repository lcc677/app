const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'development',
  // 单入口
  entry: './src/index2.js',
  // 多入口dependOn
  // entry:{
  //   index:{
  //     import:'./src/index.js',
  //     dependOn: 'shared'
  //   },
  //   another:{
  //     import:'./src/another-module.js',
  //     dependOn: 'shared'
  //   },
  //   shared:['loadsh']
  // },
  // 多入口 SplitChunckPlugin
  // entry:{
  //   index:'./src/index.js',
  //   another:'./src/another-module.js',
  // },
  // 动态导入
  // entry:'./src/index.js',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.join(__dirname, './dist'),
    clean: true,
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
    extensions: ['.js', '.json', '.vue'],
  },
  externals: {
    jquery: 'jQuery',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        test: /\.jpeg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext]',
        },
      },
      {
        test: /\.txt/,
        type: 'asset/source',
      },
      {
        test: /\.jpg/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024,
          },
        },
      },

      {
        test: /\.(css|less)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },

      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-runtime'],
            ],
          },
        },
      },
    ],
  },
  optimization: {
    // 多文件入口dependOn
    runtimeChunk: 'single',
    // 多文件入口SplitChunksPlugin
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new CssMinimizerWebpackPlugin(),
    ],
    minimize: true,
  },
};
