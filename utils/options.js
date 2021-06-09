const path = require('path')
const { join } = path

const srcFolder = 'src'

const resolve = (...p) => path.join(__dirname, '..', ...p)
const resolveToSrc = (...p) => resolve(srcFolder, ...p)

const env = process.env.NODE_ENV

console.info(`NODE_ENV: ${env}`)
const envPath = env === 'production' ? 'prod' : 'dev'

const globals = {
  __ENV__: `'${env}'`,
  __DEV__: env === 'development',
  __TEST__: env === 'test',
}

const folders = {
  build: resolve('dist'),
  src: resolveToSrc(),
  temp: resolve('node_modules/.cache/build'),
  webpack: resolve('webpack'),
}

exports.resolve = resolve

exports.build = {
  entry: resolveToSrc('main.js'),
  globals: globals,
  output: folders.build,
  babel: resolve('babel.config.js'),
  // copy: [{ from: mainRes('api/assets/favicon.ico'), to: 'assets/favicon.ico' }],
  copy: [],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [resolve('node_modules')],
  },
}

exports.webpack = {
  config: join(folders.webpack, `webpack.${envPath}.js`),
  stats: {
    assets: true,
    builtAt: env === 'production',
    children: false,
    chunks: false,
    colors: true,
    context: resolveToSrc(),
    entrypoints: env === 'production',
    env: true,
    hash: env === 'production',
    modules: false,
    timings: true,
    version: false,
  },
}
