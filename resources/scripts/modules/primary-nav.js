import $ from 'jquery';
import ee from './ee';

const $html = $('html');
const $body = $('body');
const $hamburger = $('.js-hamburger');

const activeFlagName = 'f-primary-nav-active';
const noScroll = 'noscroll';

function isOpen() {
  return $body.hasClass(activeFlagName);
}

function openNav() {
  $html.addClass(noScroll);
  $body.addClass(activeFlagName);
}

function closeNav() {
  $html.removeClass(noScroll);
  $body.removeClass(activeFlagName);
}

function toggleNav() {
  if (!isOpen()) {
    openNav();
  } else {
    closeNav();
  }
}

function addHandlers() {
  ee.addListener('closeNav', closeNav);
  $hamburger.on('click', toggleNav);
}

function init() {
  addHandlers();
}

ee.addListener('init', init);
