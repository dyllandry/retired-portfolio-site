const d = document
const template = require(`../partials/featured-work-item.pug`)
const markdownContext = require.context(`../posts/`, true, /\.md$/)
const thumbnailContext = require.context(`../posts/`, true, /thumbnail\.(png|jpeg|jpg)/)
const basePath = process.env.ASSET_PATH !== undefined
  ? process.env.ASSET_PATH + '/'
  : ''

let html = ''

markdownContext.keys().forEach(markdownPath => {
  const fm = markdownContext(markdownPath)
  if (fm.attributes.category !== `featured`) return

  let thumbnail
  thumbnailContext.keys().forEach(thumbnailPath => { // O(n^2) :(
    const thumbnailDir = thumbnailPath.slice(
      thumbnailPath.indexOf(`/`) + 1,
      thumbnailPath.lastIndexOf(`/`))
    const markdownDir = markdownPath.slice(
      markdownPath.indexOf(`/`) + 1,
      markdownPath.lastIndexOf(`/`))
    if (thumbnailDir === markdownDir) thumbnail = thumbnailContext(thumbnailPath)
  })

  let fileName =
    markdownPath.slice(markdownPath.lastIndexOf('/') + 1, markdownPath.lastIndexOf('.'))

  html += template({ ...fm.attributes, thumbnail, link: `/${basePath + fileName}.html` })
})

d.addEventListener(`DOMContentLoaded`, () => {
  d.querySelector(`.featured-work--list`).innerHTML = html
})
