const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { build } = require('../utils/options')

module.exports = {
  target: 'node',
  mode: 'development',
  devtool: 'inline-source-map',
  entry: ['./node_modules/webpack/hot/poll?1000'].concat(build.entry),
  externals: [
    nodeExternals({
      allowlist: ['webpack/hot/poll?1000'],
    }),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    libraryTarget: 'commonjs2',
    path: build.output,
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: build.babel,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    ...build.resolve,
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', ...build.resolve.extensions],
  },
  plugins: [
    // eslint-disable-next-line unicorn/explicit-length-check
    ...build.copy && build.copy.length ? [new CopyWebpackPlugin({ patterns: build.copy })] : [],
    new webpack.DefinePlugin(build.globals),
    new webpack.NormalModuleReplacementPlugin(/^es6-promisify$/, 'util'),
    new webpack.NormalModuleReplacementPlugin(/^node-uuid$/, 'uuid'),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
