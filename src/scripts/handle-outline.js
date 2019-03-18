const outlineSelector = `input, button, li[role="menuitem"], a`

document.addEventListener(`DOMContentLoaded`, () => {
  disableOutline()
  document.addEventListener(`keydown`, listenForTab)
})

function listenForTab (event) {
  if (event.key !== `Tab`) return
  enableOutline()
  document.removeEventListener(`keydown`, listenForTab)
  document.addEventListener(`click`, listenForClick)
}

function listenForClick () {
  disableOutline()
  document.removeEventListener(`click`, listenForClick)
  document.addEventListener(`keydown`, listenForTab)
}

function enableOutline () {
  const outlineElements = document.querySelectorAll(outlineSelector)
  outlineElements.forEach(element => element.classList.remove(`is-clicking`))
  outlineElements.forEach(element => element.classList.add(`is-tabbing`))
}

function disableOutline () {
  const outlineElements = document.querySelectorAll(outlineSelector)
  outlineElements.forEach(element => element.classList.remove(`is-tabbing`))
  outlineElements.forEach(element => element.classList.add(`is-clicking`))
}
