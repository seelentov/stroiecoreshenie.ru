/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const owlFeatures = $('.features__owl-carousel')

$(document).ready(function () {
  owlFeatures.owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    items: 6,
    loop: true,
    dots: false,
    nav: false,
    responsive: {
      1441: {
        items: 6
      },
      1025: {
        items: 4
      },
      769: {
        items: 3
      },
      321: {
        items: 3
      },
      0: {
        items: 2
      }
    }
  })
})
