import $ from 'jquery';
import ee from './ee';

const othelloImage = '.js-othello-image';

function disableClick() {
  $(document).off('click');
}


function flip() {
  const parent = $(this).parent();
  const firstOthello = '.js-othello-image:first-child';

  parent.find(othelloImage).each((i, el) => {
    setTimeout(() => {
      $(el).addClass('active');
      setTimeout(() => {
        $(el).removeClass('active');
      }, 50);
    }, i * 50);
  });

  setTimeout(() => {
    if (parent.hasClass('black')) {
      parent.next().find(firstOthello).addClass('active');
    } else {
      parent.prev().find(firstOthello).addClass('active');
    }
  }, 450);


  disableClick();
  setTimeout(ableClick, 450);
}

function ableClick() {
  $(document).on('click', othelloImage, flip);
}

function init() {
  ableClick();
}

ee.addListener('init', init);
