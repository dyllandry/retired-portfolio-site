module.exports = function () {
  const tenChars = document.querySelector(`.set-content-width span`)
  const tenCharsWidth = tenChars.offsetWidth
  tenChars.style.display = `none`
  const sixtyCharsWidth = tenCharsWidth * 6
  const postContent = document.querySelector(`.post-content`)
  postContent.style.maxWidth = sixtyCharsWidth
}
