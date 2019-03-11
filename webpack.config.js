const path = require(`path`)
const ExtractTextPlugin = require(`extract-text-webpack-plugin`)
const HtmlWebpackPlugin = require(`html-webpack-plugin`)

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'index-bundle.js'
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.pug`
    })
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },{
      test: /\.pug$/,
      loader: `pug-loader`
    }]
  },
}
