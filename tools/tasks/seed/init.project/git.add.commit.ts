import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { JSONParse } from '../../../utils';

const plugins = <any>gulpLoadPlugins();

export = () => {

  let pkgJson = JSONParse('package.json');

  let msg: string = 'Initialize ' + pkgJson.name;

  return gulp.src('.')
    .pipe(plugins.git.add())
    .pipe(plugins.git.commit(msg));
};
