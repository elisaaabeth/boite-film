/* ################################## */
/* ########## slider Home ####### */
/* ################################## */

var swiper = new Swiper(".home ", {
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* ################################## */
/* ########## A venir  ####### */
/* ################################## */

var swiper = new Swiper(".container-coming", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 55000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    568: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    968: {
      slidesPerView: 6,
    },
  },
});
