import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {
  plugins.git.push('origin', 'master', done);
};
