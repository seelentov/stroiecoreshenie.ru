export const swipingBlock = (block, speed = 1) => {
  let isScrolling = false
  let startX
  let scrollLeft

  block.addEventListener('mousedown', (e) => {
    isScrolling = true
    startX = e.pageX - block.offsetLeft
    scrollLeft = block.scrollLeft
    // eslint-disable-next-line no-return-assign
    Array.from(block.children).forEach(e => {
      e.style.pointerEvents = 'none'
    })
  })

  block.addEventListener('mousemove', (e) => {
    if (!isScrolling) return
    e.preventDefault()
    const x = e.pageX - block.offsetLeft
    const walk = (x - startX) * speed
    block.scrollLeft = scrollLeft - walk
  })

  block.addEventListener('mouseup', () => {
    isScrolling = false
    Array.from(block.children).forEach(e => {
      e.style.pointerEvents = 'all'
    })
  })
  block.addEventListener('mouseleave', () => {
    isScrolling = false
    Array.from(block.children).forEach(e => {
      e.style.pointerEvents = 'all'
    })
  })
}
