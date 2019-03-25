import lazyload from '../../scripts/lazyload.js'

// styles
require(`../../styles/global-styles.scss`)
require(`../../styles/post.scss`)

// scripts
require(`../../scripts/burger.js`)
require(`../../scripts/handle-outline.js`)
const insertPostImages = require(`../../scripts/insert-post-images.js`)
const setPostContentWidth = require(`../../scripts/set-post-content-width.js`)

const imageContext = require.context(`./`, false, /\.(png|jpeg|jpg)$/)
const images = imageContext.keys().map(imageContext)

// this is the only thing unique to a post entry. can it be automated?
const frontmatter = require(`./first-post.md`)
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
