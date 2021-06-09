module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        targets: {
          node: true,
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-syntax-bigint',
  ],

  env: {
    test: {
      plugins: ['dynamic-import-node'],
    },
  },

  ignore: ['node_modules', 'dist'],
}
