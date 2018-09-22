const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const production = process.env.NODE_ENV === 'production'

module.exports = {
  entry: [
    path.join(__dirname, 'scss/index.scss'),
    path.join(__dirname, 'js/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?url=false', 'sass-loader']
        })
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'js-compiled'),
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('../css-compiled/index.css'),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i
    })
  ]
}
