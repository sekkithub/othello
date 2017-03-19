import attachFastClick from 'fastclick';
import domready from 'domready';

import ee from './modules/ee';

import './modules/flip-animation';

attachFastClick(document.body);

domready(() => {
  ee.emit('init');
});
