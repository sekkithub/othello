import $ from 'jquery';
import 'slick-carousel';
import ee from './ee';

window.jQuery = $;
window.$ = $;

require('velocity-animate');
require('velocity-animate/velocity.ui');

function carouselsInit() {
  const $carousels = $('.js-carousel');
  
  $carousels.each(function begin() {
    $(this).not('.slick-initialized').slick({
      dots: false,
      slidesToShow: 1,
      lazyLoad: 'progressive',
      touchThreshold: 10,
      slide: '.js-carousel-slide',
      prevArrow: '.js-carousel-prev',
      nextArrow: '.js-carousel-next',
    });
  });
}



function init() {
  carouselsInit();

}

ee.addListener('init', init);
