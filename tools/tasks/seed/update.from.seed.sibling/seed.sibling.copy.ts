import * as gulp from 'gulp';

import Config from '../../../config';

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
  return gulp.src(Config.SEED_SIBLING_COPY)
    .pipe(gulp.dest('.'));
};
