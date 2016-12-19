/**
 * DEPRECATED
 */
// import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
// import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {
  plugins.git.checkout('upstream', function (err) {
    if (err) {
      done(err);
    } else {
      done();
    }
  });

};

