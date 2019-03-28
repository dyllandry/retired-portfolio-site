const d = document
const template = require(`../partials/featured-work-item.pug`)
const markdownContext = require.context(`../posts/`, true, /\.md$/)
const thumbnailContext = require.context(`../posts/`, true, /thumbnail\.(png|jpeg|jpg)/)

let html = ''

markdownContext.keys().forEach(markdownPath => {
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

  const fm = markdownContext(markdownPath)
  html += template({ ...fm.attributes, thumbnail })
})

d.addEventListener(`DOMContentLoaded`, () => {
  d.querySelector(`.featured-work--list`).innerHTML = html
})
