import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { incSemverPatch  } from '../../../utils';

const plugins = <any>gulpLoadPlugins();

export = () => {

  let newVersion = incSemverPatch();

  return gulp.src('./package.json')
    .pipe( plugins.bump({version: newVersion}))
    .pipe(gulp.dest('./'));
};
