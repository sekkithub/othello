import plyr from 'plyr';
import ee from './ee';

function init() {
  plyr.setup();
}

ee.addListener('init', init);
