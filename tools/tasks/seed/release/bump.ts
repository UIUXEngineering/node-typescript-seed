import { argv  } from 'yargs';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins = <any>gulpLoadPlugins();

export = () => {

  var version = argv['bump'];

  return gulp.src('./package.json')
    .pipe( plugins.bump({version: version}))
    .pipe(gulp.dest('./'));

};
