const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development'; //判断是否为开发环境

const config = {
  entry: path.join(__dirname + '/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname + '/dist')
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new webpack.EvalSourceMapDevToolPlugin() //错误映射
  ]
}

if (isDev) {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  })
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.output.filename = '[name].[chunkHash:8].js';
  config.optimization = {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name:'vendor',
          test: /vue/,
          chunks: 'all'
        }
      }
    },
    runtimeChunk: true
  }
  config.module.rules.push({
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'sass-loader'
        ]
      })
    }),
    config.plugins.push(
      new ExtractTextPlugin('style.[contentHash:8].css')
    );
}

module.exports = config;