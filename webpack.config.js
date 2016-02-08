var path = require('path')
// ~ var webpack = require('webpack')
var merge = require('webpack-merge')

const TARGET = process.env.npm_lifecycle_event
const ROOT_PATH = path.resolve(__dirname)

const common = {
  entry: path.resolve(ROOT_PATH, 'src'),
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  }
}

if (TARGET === 'test' || TARGET === 'tdd') {
  module.exports = merge(common, {
    entry: {}, // karma will set this
    output: {}, // karma will set this
    devtool: 'inline-source-map',
    resolve: {
      alias: {
        'src': path.resolve(ROOT_PATH, 'src')
      }
    },
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['isparta-instrumenter'],
          include: path.resolve(ROOT_PATH, 'src')
        }
      ],
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: [
            path.resolve(ROOT_PATH, 'src'),
            path.resolve(ROOT_PATH, 'test')
          ]
        }
      ]
    }
  })
}
