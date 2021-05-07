const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fse = require('fs-extra')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  // If in the future the creator of the postcss-hexrgba package
  // releases an update (it is version 2.0.1 as I'm writing this)
  // then it will likely work with PostCSS V8 so you can uncomment
  // the line below and also install the package with npm.
  //require('postcss-hexrgba'),
  require('autoprefixer'),
]

// class RunAfterCompile {
//   apply(compiler) {
//     compiler.hooks.done.tap('Copy images', function () {
//       fse.copySync('./src/assets/images', './dist/assets/images')
//     })
//   }
// }

let cssConfig = {
  test: /\.css$/i,
  use: [
    'css-loader?url=false',
    {
      loader: 'postcss-loader',
      options: {postcssOptions: {plugins: postCSSPlugins}},
    },
  ],
}

let imgConfig = {
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ico$/],
  use: {
    loader: 'url-loader',
  },
}

let pages = fse
  .readdirSync('./src')
  .filter(function (file) {
    return file.endsWith('.html')
  })
  .map(function (page) {
    return new HtmlWebpackPlugin({
      filename: page,
      template: `./src/${page}`,
    })
  })

let config = {
  entry: './src/assets/scripts/index.js',
  plugins: pages,
  module: {
    rules: [
      cssConfig,
      imgConfig,
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
}

if (currentTask === 'dev') {
  cssConfig.use.unshift('style-loader')
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'src'),
  }
  config.devServer = {
    before: function (app, server) {
      server._watch('./src/**/*.html')
    },
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    port: 3000,
    host: '0.0.0.0',
  }
  config.mode = 'development'
}

if (currentTask === 'build') {
  cssConfig.use.unshift(MiniCssExtractPlugin.loader)
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  }
  config.mode = 'production'
  config.optimization = {
    splitChunks: {chunks: 'all'},
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
  }
  config.plugins.push(
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'})
    // new RunAfterCompile()
  )
}

module.exports = config
