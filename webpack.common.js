const path = require(`path`)
const HtmlWebpackPlugin = require(`html-webpack-plugin`)
const CleanWebpackPlugin = require(`clean-webpack-plugin`)

module.exports = {
  entry: {
    index: './src/index.js',
    firstPost: `./src/posts/First Post/first-post.js`
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `./src/index.pug`,
      filename: `index.html`,
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: `./src/posts/post.pug`,
      chunks: [`firstPost`],
      filename: `first-post.html`,
      title: `First Tab`
    })
  ],
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
        name: `[name]-[width].[ext]`
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
    }]
  }
}
