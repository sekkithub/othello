import attachFastClick from 'fastclick';
import domready from 'domready';

import ee from './modules/ee';

import './modules/primary-nav';
import './modules/carousel';
import './modules/animate-in';
import './modules/pagination';
import './modules/scroll-to';
import './modules/popup';
import './modules/videos';
import './modules/form-validation';

attachFastClick(document.body);

domready(() => {
  ee.emit('init');
});
