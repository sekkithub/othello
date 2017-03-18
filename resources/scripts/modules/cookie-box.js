import $ from 'jquery';
import Cookies from 'js-cookie';
import ee from './ee';

const $cookieBox = $('.js-cookie-box');

function closeCookieBox() {
  $cookieBox.removeClass('show');
  Cookies.set('wanna-cookie', 'yes', { expires: 7 });
  return false;
}

function showCookieBox() {
  if (Cookies.get('wanna-cookie') === 'yes') {
    $cookieBox.removeClass('show');
  } else {
    $cookieBox.addClass('show');
  }
}

function init() {
  setTimeout(showCookieBox, 5000);
  $(document).on('click', '.js-cookie-box-close', closeCookieBox);
}

ee.addListener('init', init);
