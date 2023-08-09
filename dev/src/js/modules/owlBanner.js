/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const owlBanners = $('.banner__owl-carousel')

$(document).ready(function () {
  owlBanners.owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    items: 1,
    loop: true,
    dots: false,
    nav: false
  })
})
