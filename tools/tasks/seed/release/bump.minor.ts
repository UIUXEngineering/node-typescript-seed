import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { incSemverMinor  } from '../../../utils';

const plugins = <any>gulpLoadPlugins();

export = () => {

  let newVersion = incSemverMinor();

  return gulp.src('./package.json')
    .pipe( plugins.bump({version: newVersion}))
    .pipe(gulp.dest('./'));
};
