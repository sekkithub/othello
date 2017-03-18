import $ from 'jquery';
import 'magnific-popup';
import ee from './ee';

const popupLinks = $('.js-open-popup-link');

function init() {
  popupLinks.magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'my-mfp-slide-bottom',
    removalDelay: 500,
    callbacks: {
      beforeOpen() {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      },
    },
  });

  $('.js-popup-close').on('click', () => {
    $.magnificPopup.close();
  });
}

ee.addListener('init', init);
