import $ from 'jquery';
import ee from './ee';

window.jQuery = $;
window.$ = $;

require('velocity-animate');
require('velocity-animate/velocity.ui');

function loadMoreContent(e) {
  e.preventDefault();
  const url = $(this).attr('href');

  const $paginationContainer = $('.js-pagination');
  $('.js-pagination-load-more-holder').remove();
  $paginationContainer.append('<div class="c-loading  js-loading"><img src="/images/ajax-loader.svg" width="24" height="24" class="c-loading__icon" /></div>');

  $.get(url, (data) => {
    const $root = $('<div>', { html: data });
    const $elements = $root.find('.js-pagination');
    $paginationContainer.find('.js-loading').remove();
    const $newItems = $elements.find('.js-pagination-list-item').css('opacity', 0);
    const $newLoadMore = $elements.find('.js-pagination-load-more-holder').css('opacity', 0);
    $paginationContainer.find('.js-pagination-list').append($newItems);
    $paginationContainer.append($newLoadMore);

    $newItems.velocity(
      'transition.slideDownIn',
      {
        stagger: 80,
        display: 'inline-block',
        complete() {
          $newLoadMore.velocity('fadeIn', {
            display: 'block',
            duration: 200,
          });
        },
      }
    );
  });
}

function bindUI() {
  $(document).on('click', '.js-pagination-load-more', loadMoreContent);
}

function init() {
  bindUI();
}

ee.addListener('init', init);
