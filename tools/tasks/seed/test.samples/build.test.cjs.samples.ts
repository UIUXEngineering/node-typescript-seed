import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join, sep  } from 'path';
import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {

  let files: string[] = [
    join(Config.SAMPLES_DIR, '**', '*.ts')
  ];

  return gulp.src(files)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.typescript(Config.TYPESCRIPT_CJS_CONFIG))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(Config.SAMPLES_DIR));
};
