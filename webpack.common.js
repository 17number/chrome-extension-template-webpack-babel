const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    content: './src/content.js',
    background: './src/background.js',
    options: './src/options.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/manifest.json' },
        { from: 'src/assets' },
        { from: 'src/options.html' },
      ]
    }),
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          }
        ],
      },
    ],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
