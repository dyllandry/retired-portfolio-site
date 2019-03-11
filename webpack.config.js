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
    },{
      test: /\.(jpeg|jpg|png)$/,
      loader: `responsive-loader`,
      options: {
        sizes: [300, 400, 600, 800, 1200],
        placeholder: true,
        placeholderSize: 21
      }
    },{
      test: /.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    },{
      test: /.js$/,
      enforce: "pre",
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }]
  },
}
