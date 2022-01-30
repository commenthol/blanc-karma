// needed given our Webpack configuration uses ES6 and JSX
// require('@babel/register')

// Reference: http://karma-runner.github.io/0.13/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
    // Make Karma work with pnpm.
    // See: https://github.com/pnpm/pnpm/issues/720#issuecomment-954120387
    plugins: Object.keys(require('./package.json').devDependencies).flatMap(
      (packageName) => {
        if (!packageName.startsWith('karma-') || packageName === 'karma-cli') {
          return []
        }
        return [require(packageName)]
      }
    ),

    frameworks: [
      // Reference: https://github.com/karma-runner/karma-mocha
      // Set framework to mocha
      'mocha'
    ],

    reporters: [
      'progress',
      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      'coverage'
    ],

    files: [
      'test/karma-global.js',
      // Grab all files in the tests directory that contain _test.
      'test/**/*.spec.js'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'test/**/*.spec.js': ['webpack', 'coverage', 'sourcemap']
    },

    browsers: [
      // 'Chrome',
      // 'Firefox',
      'ChromeHeadless'
    ],

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // Test webpack config
    webpack: require('./webpack.config'),

    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: true
    }
  })
}
