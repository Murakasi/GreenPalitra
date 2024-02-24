const swiper = new Swiper('.reviews__swiper', {
  // Optional parameters
  // direction: 'horizontal',
  loop: true,

  // Navigation arrows
  slidesPerView: 2,
  spaceBetween: 22,

  navigation: {
    nextEl: '.reviews__item-prev',
    prevEl: '.reviews_item-next',
  },

});
