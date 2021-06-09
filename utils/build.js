const rimraf = require('rimraf')
const webpack = require('webpack')

const options = require('./options')
// eslint-disable-next-line security/detect-non-literal-require
const webpackConfig = require(options.webpack.config)

console.info('START')

console.info('cleaning output folder')
rimraf.sync(options.build.output)

console.info('compiling....')
const compiler = webpack(webpackConfig)

compiler.run((err, stats) => {
  if (err) console.error(err)
  else console.info(stats.toString(options.webpack.stats))
  console.info('DONE')
})
