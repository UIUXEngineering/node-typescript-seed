import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { sep } from 'path';
import Config from '../../../config';

var progress = require('request-progress');

const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build process, linting the TypeScript files using `codelyzer`.
 */
export = (done: any) => {
  plugins.download(Config.DOWNLOAD_DOCS)
    .pipe(gulp.dest(Config.DOCS_DIR + sep))
    .on('end', done);

};
