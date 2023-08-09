/* eslint-disable no-return-assign */
const toolsBlock = document.querySelector('.our-tools__items')
const tools = Array.from(toolsBlock.children)
const scrollWidth = tools[0].clientWidth

toolsBlock.scrollTo({
  left: scrollWidth * 4
})

let thisItem = 4
let state = 1
document.addEventListener('click', (event) => {
  if (state === 1) {
    state = 0
    if (event.target.closest('.our-tools__arrow-l')) {
      thisItem -= 1
      tools.forEach(e => e.classList.remove('our-tools__item__active'))
      tools[thisItem].classList.add('our-tools__item__active')
      toolsBlock.scrollTo({
        left: toolsBlock.scrollLeft - scrollWidth,
        behavior: 'smooth'
      })
    }
    if (event.target.closest('.our-tools__arrow-r')) {
      thisItem += 1
      tools.forEach(e => e.classList.remove('our-tools__item__active'))
      tools[thisItem].classList.add('our-tools__item__active')
      toolsBlock.scrollTo({
        left: toolsBlock.scrollLeft + scrollWidth,
        behavior: 'smooth'
      })
    }

    if (thisItem === 0 || thisItem === 8) {
      thisItem = 4
      tools[thisItem].classList.add('our-tools__item__active')
      setTimeout(() => {
        toolsBlock.scrollTo({
          left: scrollWidth * 4
        })
        tools.forEach(e => e.classList.remove('our-tools__item__active'))
        tools[thisItem].classList.add('our-tools__item__active')
      }, 300)
    }

    setTimeout(() => {
      state = 1
    }, 500)
  }
})
