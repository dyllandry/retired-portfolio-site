require('dotenv').config()
const Hwp = require(`html-webpack-plugin`)
const debug = require(`debug`)(`build-posts`)
const glob = require(`glob`)
const path = require(`path`)
const fs = require(`fs`)
const fm = require(`front-matter`)
const marked = require(`marked`)
const pug = require(`pug`)

const mdFiles = glob.sync(path.resolve(__dirname, `posts`, `**/*.md`))
const filesContent = mdFiles.map(path => fs.readFileSync(path, { encoding: `utf8` }))
const filesFm = filesContent.map(file => fm(file))
const newFilesPaths = filesFm.map((fm, i) => {
  const originalPath = path.parse(mdFiles[i])
  const writePath = path.resolve(originalPath.dir, `${originalPath.name}.html`)
  return writePath
})
const filesHtml = filesFm.map((fm, i) => {
  const postHtml = marked(fm.body)
  const template = pug.compileFile(path.resolve(__dirname, `posts`, `post.pug`))
  const fullHtml = template({
    postHtml: postHtml,
    title: filesFm[i].attributes.title,
    publicPath: (process.env.ASSET_PATH !== undefined)
      ? `/${process.env.ASSET_PATH}/`
      : '/'

  })
  return fullHtml
})

// Write files
filesHtml.forEach((html, i) => {
  fs.writeFileSync(newFilesPaths[i], html)
  debug(`Wrote: ${newFilesPaths[i]}`)
})

const entries = {
  post: `./src/posts/post.js`
}

function GetPlugins () {
  return newFilesPaths.map(function (filePath, i) {
    const title = String(filesFm[i].attributes.title)
    return new Hwp({
      template: filePath,
      filename: path.parse(filePath).base,
      chunks: [`post`],
      title: title.replace(' ', '-').toLowerCase()
    })
  })
}

module.exports = {
  entries,
  GetPlugins
}
