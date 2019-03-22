import lazyload from '../../scripts/lazyload.js'

// styles
require(`../../styles/global-styles.scss`)
require(`../../styles/post.scss`)

// scripts
require(`../../scripts/burger.js`)
require(`../../scripts/handle-outline.js`)
const insertPostImages = require(`../../scripts/insert-post-images.js`)

const imageContext = require.context(`./`, false, /\.(png|jpeg|jpg)$/)
const images = imageContext.keys().map(imageContext)
insertPostImages(images)
lazyload.init()

// this is the only thing unique to a post entry. can it be automated?
const frontmatter = require(`./first-post.md`)
const d = document
d.querySelector(`.post-content`).innerHTML = frontmatter.html
