import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join, sep } from 'path';
import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {

  let cjsInstrumentFiles = [
    join(Config.APP_SRC, '**', '*.js'),
    '!' + join(Config.APP_SRC, '**', '*.spec.js')
    // '!' + join(Config.APP_SRC, 'mocks.js'),
    // '!' + join(Config.APP_SRC, '**', '*.mock.js')
  ];

  return gulp.src(cjsInstrumentFiles)
    .pipe(plugins.istanbul({ includeUntested: true }))
    .pipe(plugins.istanbul.hookRequire()); //this forces any call to 'require' to return our instrumented files
};
