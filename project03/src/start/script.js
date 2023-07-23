document.getElementById('arrow').addEventListener('click', () => {
  console.log('test')
  let children = Array.from(
    document.getElementById('arrow').parentElement.children
  )
  children = [children[1], children[3]]
  children.forEach(element => {
    const ele = element
    ele.classList.toggle('hidden')
  })
})
