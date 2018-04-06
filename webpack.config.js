var path = require('path')
// ~ var webpack = require('webpack')
var merge = require('webpack-merge')

const TARGET = process.env.npm_lifecycle_event
const ROOT_PATH = path.resolve(__dirname)

const common = {
  // entry: path.resolve(ROOT_PATH, 'src'),
  // resolve: {
    // extensions: ['', '.js']
  // },
  // output: {
    // path: path.resolve(ROOT_PATH, 'build'),
    // filename: 'bundle.js'
  // }
}

console.log(TARGET)

if (TARGET === 'test' || TARGET === 'tdd') {
  module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loaders: ['babel-loader'],
          include: [
            path.resolve(ROOT_PATH, 'src'),
            path.resolve(ROOT_PATH, 'test')
          ]
        },
        {
          test: /\.jsx?$/,
          loaders: ['istanbul-instrumenter-loader'],
          include: path.resolve(ROOT_PATH, 'src')
        },
      ]
    }
  })
}
