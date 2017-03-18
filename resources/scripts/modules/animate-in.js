import $ from 'jquery';
import ee from './ee';

require('waypoints/lib/noframework.waypoints');

const Waypoint = window.Waypoint;
const $animateInElements = $('.js-animate-in');

function initalizeWaypoints() {
  $animateInElements.each((i, el) => {
    new Waypoint({
      element: el,
      handler() {
        $(this.element).addClass('activated');
      },
      offset() {
        return $(window).height() - ($(el).height() / 3);
      },
    });
  });
}

function refreshWaypoints() {
  Waypoint.refreshAll();
}

function addRefreshHandlers() {
  ee.addListener('refreshLayout', refreshWaypoints);
}

function init() {
  initalizeWaypoints();
  addRefreshHandlers();
}

ee.addListener('init', init);
ee.addListener('menuChange', refreshWaypoints);
