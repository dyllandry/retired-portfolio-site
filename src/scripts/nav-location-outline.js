const d = document
d.addEventListener(`DOMContentLoaded`, () => {
  let navElements = d.querySelectorAll(`.navbar-item, #mobile-nav-menu .list-item`)

  navElements = Array.prototype.filter.call(navElements, element => {
    let outlineSelector = element.dataset.outlineSelector
    return outlineSelector !== undefined
  })

  navElements.forEach(element => {
    let outlineSelector = element.dataset.outlineSelector
    const outlineElement = d.querySelector(outlineSelector)
    element.onclick = function () { outlineTemporarily(outlineElement, 1000) }
  })
})

function outlineTemporarily (element) {
  let outlined = false
  let flashes = 0
  let timesToFlash = 2
  setTimeout(() => {
    const outlineInterval = setInterval(() => {
      element.style.outline = outlined ? `none` : `5px auto -webkit-focus-ring-color`
      outlined = !outlined
      if (!outlined) flashes++
      if (flashes === timesToFlash) clearInterval(outlineInterval)
    }, 250)
  }, 150)
}
