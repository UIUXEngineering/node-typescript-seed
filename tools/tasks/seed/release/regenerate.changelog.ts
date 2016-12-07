/**
 * gulp regenerateChangelog
 *
 * If your options.releaseCount is 0
 * (regenerate all changelog from previous releases)
 * you can just use conventional-changelog directly
 * or not to read the file at all.
 */
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins = <any>gulpLoadPlugins();

export = () => {
  return gulp.src('./CHANGELOG.md', {
    buffer: false
  })
    .pipe(plugins.conventionalChangelog({
      preset: 'angular',
      releaseCount: 0
    }))
    .pipe(gulp.dest('./'));
};


