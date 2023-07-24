let accardionOpen = false
const ele = document.getElementById('overlay')
const openAccardion = () => {
  ele.classList.add('animate-slideIn')
  ele.classList.remove('animate-slideOut')
  accardionOpen = true
}
const closeAcardion = () => {
  ele.classList.add('animate-slideOut')
  ele.classList.remove('animate-slide')
  accardionOpen = false
}
document.getElementById('arrow').addEventListener('click', () => {
  if (!accardionOpen) {
    openAccardion()
  } else {
    closeAcardion()
  }
})
Array.from(document.getElementsByClassName('template-type')).forEach(
  element => {
    element.addEventListener('click', () => {
      closeAcardion()
      const clone = document
        .getElementById('button-template')
        .content.cloneNode(true)

      document.getElementById('main-layout').prepend(clone)
    })
  }
)
