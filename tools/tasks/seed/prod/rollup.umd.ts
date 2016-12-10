import { rollup } from 'rollup';
// import * as gulpLoadPlugins from 'gulp-load-plugins';
import Config from '../../../config';

// const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  rollup(Config.ROLLUP_CONFIG.ROLLUP).then( function ( bundle ) {

    bundle.write(Config.ROLLUP_CONFIG.BUNDLE).then(function() {
      done();
    });
  });

};
