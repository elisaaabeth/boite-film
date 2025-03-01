/* ################################## */
/* ########## slider Home ####### */
/* ################################## */

var swiper = new Swiper(".mySwiper", {
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
