const path = require('path');
const ForkTsCheckerWebPackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: process.env.NODE.ENV,
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    emitOnErrors: false,
  },
  plugins: [new ForkTsCheckerWebPackPlugin()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public', 'dist'),
  },
};