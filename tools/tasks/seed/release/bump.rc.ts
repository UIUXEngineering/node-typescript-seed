import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { incSemveRC  } from '../../../utils';

const plugins = <any>gulpLoadPlugins();

export = () => {

  var version = incSemveRC();

  return gulp.src('./package.json')
    .pipe( plugins.bump({version: version}))
    .pipe(gulp.dest('./'));

};
