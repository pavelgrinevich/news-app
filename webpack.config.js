const path = require('path');
const HtmtlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('./css/style.css');

module.exports = {
  mode: 'none',
  entry: {
    'polyfills': path.join(__dirname, './src/polyfills.ts'),
    'app': path.join(__dirname, './src/main.ts'),
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: './js/[name].js',
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmtlWebpackPlugin({
      template: './src/index.html',
    }),
    extractCSS,
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  module:{
    rules:[
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
          } ,
          'angular2-template-loader'
        ],
      },
      {
        test: /\.css$/,
        use: extractCSS.extract([
          'css-loader',
        ]),
      },
    ]
   },
}