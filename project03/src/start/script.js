let accardionOpen = false
document.getElementById('arrow').addEventListener('click', () => {
  const [, bot, , top] = Array.from(
    document.getElementById('arrow').parentElement.children
  )
  const animateBot = () => {
    top.removeEventListener('animationend', animateBot)
    bot.classList.add('animate-slideBot')
    bot.classList.remove('animate-slideBotOut')
  }
  const animateTopOut = () => {
    bot.removeEventListener('animationend', animateTopOut)
    top.classList.add('animate-slideTopOut')
    top.classList.remove('animate-slideTop')
  }
  if (!accardionOpen) {
    top.classList.add('animate-slideTop')
    top.classList.remove('animate-slideTopOut')
    top.addEventListener('animationend', animateBot)
    accardionOpen = true
  } else {
    bot.classList.add('animate-slideBotOut')
    bot.classList.remove('animate-slideBot')
    bot.addEventListener('animationend', animateTopOut)
    accardionOpen = false
  }
})
