import * as handlers from './main';
import connect from 'fc-helper-connect';

connect(handlers, {
  init() {
    console.log('init');
  },
})(exports)
