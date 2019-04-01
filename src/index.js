import lazyload from './scripts/lazyload.js'

// styles
require(`./styles/global-styles.scss`)
require(`./styles/index.scss`)
require(`./styles/about-tile.scss`)
require(`./styles/featured-work-tile.scss`)
require(`./styles/blog-tile.scss`)

// scripts
require(`./scripts/lazyload.js`)
require(`./scripts/burger.js`)
require(`./scripts/handle-outline.js`)
require(`./scripts/nav-location-outline.js`)
require(`./scripts/featured-work.js`)
require(`./scripts/insert-blog-posts.js`)
require(`./scripts/fade-in-icons.js`)
require(`./scripts/fade-in-index.js`)

document.addEventListener('DOMContentLoaded', () => lazyload.init())
