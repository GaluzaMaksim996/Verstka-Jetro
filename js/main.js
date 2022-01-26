$(function() {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="/images/slider/slide-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="/images/slider/slide-right.svg" alt=""></button>',
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });
})

	