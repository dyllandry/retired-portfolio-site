import lazyload from '../scripts/lazyload.js'
// styles
require(`../styles/global-styles.scss`)
require(`../styles/post.scss`)

// scripts
const insertPostImages = require(`../scripts/insert-post-images.js`)
const setPostContentWidth = require(`../scripts/set-post-content-width.js`)
const imageContext = require.context(`./`, true, /\.(png|jpeg|jpg)$/)
const images = imageContext.keys().map(imageContext)

const d = document
d.addEventListener(`DOMContentLoaded`, () => {
  const postContent = d.querySelector(`.post-content`)
  setPostContentWidth()
  insertPostImages(images)
  lazyload.init()
  setTimeout(() => {
    postContent.style.transition = `opacity 0.5s`
    postContent.style.opacity = 1
  }, 50)
})
