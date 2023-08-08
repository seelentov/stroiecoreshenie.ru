/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const owlAbout = $('.about__owl-carousel')

$(document).ready(function () {
  owlAbout.owlCarousel({
    loop: true,
    items: 3,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    nav: false,
    touchDrag: false,
    mouseDrag: false
  })
})
