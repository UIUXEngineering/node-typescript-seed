import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {
  plugins.git.removeRemote('origin', function (err) {
    if (err) {
      done(err);
    } else {
      done();
    }
  });

};

