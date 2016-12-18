import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';
import { JSONParse } from '../../../utils';

import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {

  var pkgJson = JSONParse('package.json');

  let url: string = pkgJson.repository.replace('git+https', 'https');

  let templateLocals = {
    name: pkgJson.name,
    repo: url,
    issues: url.replace('.git', '/issues')
  };

  return gulp.src(join(Config.DOCS_DIR, Config.NPM_README_FILENAME))
    .pipe(plugins.template(templateLocals))
    .pipe(plugins.rename('README.md'))
    .pipe(gulp.dest('.'));
};
