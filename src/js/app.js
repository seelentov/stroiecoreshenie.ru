/* eslint-disable no-unused-vars */
import menuBurger from './modules/menuBurger.js'
import { swipingBlock } from './modules/swipingBlock.js'
import switchBanner from './modules/switchBanner.js'
import switchTools from './modules/switchTools.js'
import arrows from './modules/arrows.js'
import switchFeatures from './modules/switchFeatures.js'

document.addEventListener('DOMContentLoaded', () => {
  swipingBlock(document.querySelector('.banners__images'))
  swipingBlock(document.querySelector('.features__items'))
})
