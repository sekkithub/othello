import $ from 'jquery';

window.jQuery = $; // Velocity and Waypoints JS don't work without this.

require('velocity-animate');
require('velocity-animate/velocity.ui');

function scrollTo() {
  const target = $(this).data('scroll-to');

  $(target).velocity('scroll', {
    duration: 1500,
    easing: 'easeInOutCubic',
    offset: -1 * $('.js-header').outerHeight(),
  });
}

$(document).on('click', '.js-scroll-link', scrollTo);
