import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';

import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {

  let pkgJson = Config.INIT_PACKAGE_JSON;

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
