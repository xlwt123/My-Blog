const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  entry: path.join(__dirname + '/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname + '/dist')
  },
  module: {
    rules: [
      {
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
      },
      {
        test: /\.(ttf|woff)$/,
        loader: 'file-loader'
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
    new webpack.EvalSourceMapDevToolPlugin()
  ]
}

if (isDev) {
  config.devServer = {
    port: 8001,
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
}

module.exports = config;