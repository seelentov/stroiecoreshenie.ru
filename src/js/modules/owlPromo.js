/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const owlPromo = $('.promo__owl-carousel')

$(document).ready(function () {
  owlPromo.owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    items: 5,
    loop: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      },
      1920: {
        items: 5
      }
    }
  })
})
