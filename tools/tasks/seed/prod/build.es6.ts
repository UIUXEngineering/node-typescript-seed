import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join  } from 'path';
import { createBuildConfig } from '../../../utils';
import * as merge from 'merge2';
import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

let buildParams: any = {
  fileName: 'app.ts',
  pathRelativeToSrc: '',
  outputFileName: 'app.js',
  tsconfigFilename: Config.APP_TSCONFIG
};

export = () => {

  let buildConfig = createBuildConfig(buildParams);

  let tsResult = gulp.src(join(Config.SRC_DIR, '**', '*.ts'))
    .pipe(plugins.typescript(buildConfig.tsconfig));

  return merge([
    tsResult.dts.pipe(gulp.dest('types')),
    tsResult.js.pipe(gulp.dest('es6'))
  ]);

};
