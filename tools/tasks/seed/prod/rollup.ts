import { rollup } from 'rollup';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join, sep  } from 'path';
import { JSONParse } from '../../../utils';
import * as merge from 'merge2';
import * as fs from 'fs';
import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  let rollupConfig: any = JSONParse(join(Config.SRC, 'app.rollup.config.json'));

  console.log(rollupConfig);

  // used to track the cache for subsequent bundles
  var cache;

  rollup({
    entry: rollupConfig.entry.split('/').join(sep),
    sourceMap: true,
    cache: cache
  }).then( function ( bundle ) {
    // Generate bundle + sourcemap
    // var result = bundle.generate({
    //   moduleName: 'typescript.seed',
    //   // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
    //   format: 'umd'
    // });

    // console.log(result);

    // Cache our bundle for later use (optional)
    cache = bundle;

    // fs.writeFileSync( rollupConfig.dest.split('/').join(sep), result.code );

    // Alternatively, let Rollup do it for you
    // (this returns a promise). This is much
    // easier if you're generating a sourcemap

    // console.log(rollupConfig.dest.split('/').join(sep));

    bundle.write({
      dest: 'umd/app.umd.js',
      moduleName: 'typescript.seed',
      // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
      format: 'umd',
      sourceMap: true
    }).then(function() {
      console.log('done');
      done();
    });
  });

};
