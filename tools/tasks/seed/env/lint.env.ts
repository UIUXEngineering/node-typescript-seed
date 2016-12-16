import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join, sep } from 'path';

import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build process, linting the TypeScript files using `codelyzer`.
 */
export = () => {
  let src = [
    join('.', '**', '*.ts'),
    '!' + Config.DIST_DIR + '{,' + sep + '**}',
    '!' + Config.TYPES_DIR + '{,' + sep + '**}',
    '!' + Config.APP_SRC + '{,' + sep + '**}',
    '!' + Config.SAMPLES_DIR + '{,' + sep + '**}',
    '!.' + sep + 'node_modules{,' + sep + '**}',
    '!' + join('.', '**', '*.d.ts')
  ];

  return gulp.src(src, {'base': '.'})
    .pipe(plugins.tslint())
    .pipe(plugins.tslint.report({
      emitError: require('is-ci')
    }));
};
