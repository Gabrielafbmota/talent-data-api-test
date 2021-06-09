const webpack = require('webpack')
const rimraf = require('rimraf')

const options = require('./options')

// eslint-disable-next-line security/detect-non-literal-require
const webpackConfig = require(options.webpack.config)

rimraf.sync(options.build.output)

console.clear()
let first = true

const compiler = webpack(webpackConfig)

// eslint-disable-next-line security/detect-non-literal-fs-filename
compiler.watch(
  {
    ignored: /node_modules|dist|logs/,
  },
  (err, stats) => {
    if (err) console.error(err)
    else {
      const result = stats.toString({
        ...options.webpack.stats,
        ...!first ? { assets: false, timings: false } : null,
      })
      first = false
      console.info(result)
    }
  }
)
