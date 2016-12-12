import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join  } from 'path';
import * as merge from 'merge2';
import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {

  let tsResult = gulp.src(join(Config.SRC_DIR, '**', '*.ts'))
    .pipe(plugins.typescript(Config.TYPESCRIPT_ES6_CONFIG));

  return merge([
    tsResult.dts.pipe(gulp.dest(Config.TYPES_DIR)),
    tsResult.js.pipe(gulp.dest(Config.ES6_DIR))
  ]);

};
