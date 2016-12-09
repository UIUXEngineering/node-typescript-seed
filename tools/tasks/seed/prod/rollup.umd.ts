import { rollup } from 'rollup';
// import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join, sep  } from 'path';
import { JSONParse } from '../../../utils';
import Config from '../../../config';

// const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  let rollupConfig: any = JSONParse(join(Config.SRC, 'app.rollup.config.json'));

  // used to track the cache for subsequent bundles
  var cache;

  rollup({
    entry: rollupConfig.entry.split('/').join(sep),
    sourceMap: true,
    cache: cache
  }).then( function ( bundle ) {

    // Cache our bundle for later use (optional)
    cache = bundle;


    bundle.write({
      dest: 'umd/app.umd.js',

      // required for umd bundles
      moduleName: 'typescript.seed',
      // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
      format: 'umd',
      sourceMap: true
    }).then(function() {
      done();
    });
  });

};
