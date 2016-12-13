import * as gulp from 'gulp';
import { join } from 'path';

import Config from '../../../config';

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
  return gulp.src([
    join(Config.GIT_HOOKS_PATH, '**/*')
  ])
    .pipe(gulp.dest(join('.git', 'hooks')));
};
