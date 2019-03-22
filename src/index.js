import lazyload from './scripts/lazyload.js'
require(`./styles/global-styles.scss`)
require(`./styles/about-tile.scss`)
require(`./styles/featured-work-tile.scss`)
require(`./scripts/lazyload.js`)
require(`./scripts/burger.js`)
require(`./scripts/handle-outline.js`)
require(`./scripts/nav-location-outline.js`)
require(`./scripts/featured-work.js`)

document.addEventListener('DOMContentLoaded', lazyload.init)
