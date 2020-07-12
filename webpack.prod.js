const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: /\/node_modules\//,
        terserOptions: {
          mangle: true,
          output: {
            ascii_only: false,
          },
        },
      }),
    ],
  },
});