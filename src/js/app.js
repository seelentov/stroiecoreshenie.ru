import menuBurger from './modules/menuBurger.js'
import { swipingBlock } from './modules/swipingBlock.js'
import switchBanner from './modules/switchBanner.js'

document.addEventListener('DOMContentLoaded', () => {
  swipingBlock(document.querySelector('.banners__images'))
})
