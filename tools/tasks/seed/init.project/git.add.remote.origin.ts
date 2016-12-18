import * as gulpLoadPlugins from 'gulp-load-plugins';
import { JSONParse } from '../../../utils';

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  let pkgJson = JSONParse('package.json');

  let url: string = pkgJson.repository.replace('git+https', 'https');

  plugins.git.addRemote('origin', url, function (err) {
    if (err) {
      done(err);
    } else {
      done();
    }
  });

};

