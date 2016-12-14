import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';
import { JSONParse } from '../../../utils';

import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {

  var pkgJson = JSONParse('package.json');

  let templateLocals = {
    name: pkgJson.name,
    repo: pkgJson.repository.url.replace('git+https', 'https'),
    issues: pkgJson.bugs.url
  };

  return gulp.src(join(Config.DOCS_DIR, Config.NPM_README_FILENAME))
    .pipe(plugins.template(templateLocals))
    .pipe(plugins.rename('README.md'))
    .pipe(gulp.dest('.'));
};
