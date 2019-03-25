import lazyload from '../scripts/lazyload.js'
// styles
require(`../styles/global-styles.scss`)
require(`../styles/post.scss`)

// scripts
require(`../scripts/burger.js`)
require(`../scripts/handle-outline.js`)
const insertPostImages = require(`../scripts/insert-post-images.js`)
const setPostContentWidth = require(`../scripts/set-post-content-width.js`)
// WARNING: This imageContext is handling paths to every posts' images. That might be bad?
const imageContext = require.context(`./`, true, /\.(png|jpeg|jpg)$/)
const images = imageContext.keys().map(imageContext)

// FIXME
function build (markdownFileName) {
  // require context all markdown
  const markdownContext = require.context('./', true, /\.md$/)
  const markdownPath = markdownContext.keys().filter(markdownPath => {
    const name = markdownPath.slice(markdownPath.lastIndexOf(`/`) + 1)
    return name === markdownFileName
  })[0]
  // find match
  // require
  const frontmatter = markdownContext(markdownPath)

  const d = document
  d.addEventListener(`DOMContentLoaded`, () => {
    const postContent = d.querySelector(`.post-content`)
    postContent.innerHTML = frontmatter.html
    setPostContentWidth()
    insertPostImages(images)
    lazyload.init()
    setTimeout(() => {
      postContent.style.transition = `opacity 0.5s`
      postContent.style.opacity = 1
    }, 50)
  })
}

export {
  build
}
