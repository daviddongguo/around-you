const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';
const isProduction = !isDevelopment;

// eslint-disable-next-line no-console
// console.log('development---------', isDevelopment);
// eslint-disable-next-line no-console
// console.log('production------------', isProduction);

const imageInHtmlLoader = {
  test: /\.html$/,
  // loader: 'html-loader', // use commonJs
  use: [
    {
      loader: 'html-loader',
      options: {
        esModule: false,
        // sources: true,
      },
    },
  ],
};

const imageInCssUrlLoader = {
  test: /\.(png|jpe?g|gif|svg|ico)$/i,
  // install url-loader, file-loader
  // not load the images in html file
  loader: 'url-loader',
  options: {
    limit: 8 * 1024,
    esModule: false, // use commonJs
    name: '[contenthash:8].[ext]',
    outputPath: 'assets/images',
  },
};

const otherFilesLoader = {
  exclude: /\.(css|js|html|less|json|jpg|png|ico)$/,
  loader: 'file-loader',
  options: {
    name: '[contenthash:8].[ext]',
    outputPath: 'assets/fonts',
  },
};

const jsEslint = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: ['/node_modules', '/build'],
  include: path.resolve(__dirname, 'src'),
  use: [
    {
      loader: 'eslint-loader',
      options: {
        fix: true,
      },
    },
  ],
};
const jsBabel = {
  test: /\.js$/,
  exclude: ['/node_modules', '/build'],
  use: [
    // {
    //   loader: 'thread-loader',
    //   options: { workers: 4
    //  },
    // },
    'babel-loader',
  ],
};

const commonCssLoader = [
  isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
  'css-loader',
  'postcss-loader',
];

const lessCssRule = {
  // install less , less-loader
  test: /\.less$/,
  use: [...commonCssLoader, 'less-loader'],
};

const cssRule = {
  test: /\.css$/,
  use: [...commonCssLoader],
};

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: isDevelopment ? 'eval-source-map' : 'cheap-source-map',
  entry: ['./src/index.js'],
  output: {
    filename: 'built.[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      jsEslint,
      {
        oneOf: [
          jsBabel,
          imageInHtmlLoader,
          imageInCssUrlLoader,
          cssRule,
          lessCssRule,
          otherFilesLoader,
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: true,
      // },
    }),
    // DefinePlugin allows you to create global constants which can be configured at compile time
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
      },
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    // Only enable in production mode
    isProduction && new CleanWebpackPlugin(),
    isProduction &&
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[contenthash:8].css',
        chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
      }),
  ].filter(Boolean),
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 3089,
    hot: true,
  },
  optimization: {
    minimize: isProduction,
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    splitChunks: {
      chunks: 'all',
    },
  },
};
