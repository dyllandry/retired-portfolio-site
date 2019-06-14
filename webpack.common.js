const Dotenv = require('dotenv-webpack')
const path = require(`path`)
const HtmlWebpackPlugin = require(`html-webpack-plugin`)
const CleanWebpackPlugin = require(`clean-webpack-plugin`)
const CopyWebpackPlugin = require(`copy-webpack-plugin`)
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const buildPosts = require(`./src/build-posts.js`)
const merge = require(`merge`)

const entry = merge(
  { index: './src/index.js' },
  buildPosts.entries
)

const publicPath = `/${process.env.ASSET_PATH}/`
const postHwps = buildPosts.GetPlugins()

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    publicPath
  },
  devServer: {
    contentBase: './dist',
    publicPath
  },
  plugins: [
    new Dotenv(),
    new FaviconsWebpackPlugin({
      logo: './src/d-favicon.png',
      title: `Dylan's Portfolio Site`
    }),
    new CopyWebpackPlugin([
      { from: `src/copy-to-dist`, to: `./` }
    ]),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `./src/index.pug`,
      filename: `index.html`,
      chunks: ['index'],
      templateParameters: {
        publicPath
      }
    })
  ].concat(postHwps),
  module: {
    rules: [{
      test: /\.pug$/,
      loader: `pug-loader`
    }, {
      test: /\.(jpeg|jpg|png)$/,
      loader: `responsive-loader`,
      options: {
        sizes: [300, 400, 600, 800, 1200],
        placeholder: true,
        placeholderSize: 21,
        name: `[name]-[hash].[ext]`
      }
    }, {
      test: /.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }, {
      test: /.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }, {
      test: /\.md$/,
      loader: `frontmatter-markdown-loader`
    }, {
      test: /\.mp4$/,
      loader: `file-loader?name=videos/[name].[ext]`
    }]
  }
}
