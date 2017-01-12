import * as gulpLoadPlugins from 'gulp-load-plugins';
import Config from '../../../config';

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  let pkgJson = Config.INIT_PACKAGE_JSON;

  let url: string = pkgJson.repository.replace('git+https', 'https');

  plugins.git.addRemote('origin', url, function (err) {
    if (err) {
      done(err);
    } else {
      done();
    }
  });

};

