import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
  return gulp.src('README.md')
    .pipe(plugins.rename(Config.PROJECT_README_FILENAME))
    .pipe(gulp.dest(Config.DOCS_DIR));
};
