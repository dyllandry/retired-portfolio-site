const d = document
d.addEventListener(`DOMContentLoaded`, () => {
  setInterval(() => {
    const icons = d.querySelectorAll(`.icon.lazy`)
    icons.forEach((icon, index) => {
      icon.style.transition = `opacity 1s`
      icon.style.opacity = 1
      icon.classList.remove(`lazy`)
    })
  }, 100)
})
