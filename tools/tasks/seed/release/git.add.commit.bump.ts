import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins = <any>gulpLoadPlugins();

export = () => {
  return gulp.src('.')
    .pipe(plugins.git.add())
    .pipe(plugins.git.commit('Bumped version number'));
};
