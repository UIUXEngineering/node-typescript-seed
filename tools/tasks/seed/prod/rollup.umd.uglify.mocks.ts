import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {

  return gulp.src(Config.ROLLUP_MOCK_CONFIG.BUNDLE.dest)
    .pipe(plugins.sourcemaps.init())
    /**
     * mangle:true ( default ) breaks the angular2 app.
     */
    .pipe(plugins.uglify({mangle:false}))
    .pipe(plugins.rename(Config.JS_MOCKS_BUNDLE_MIN_FILENAME))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(Config.DIST_UMD));

};
