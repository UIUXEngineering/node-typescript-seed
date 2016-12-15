import * as gulp from 'gulp';
// import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join, sep } from 'path';
import * as runSequence from 'run-sequence';


import Config from '../../../config';

// const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build process, linting the TypeScript files using `codelyzer`.
 */
export = () => {
  let src = [
    join(Config.APP_SRC, '**', '*.ts')
  ];

  gulp.watch(src, function() {
    runSequence('test');
  });
};
