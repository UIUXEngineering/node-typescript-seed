import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

var SpecReporter = require('jasmine-spec-reporter');

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  let files = [
    'src/**/*[spec].ts',
    'specHelpers/**/*.ts'
  ];

  let instrumentFiles = [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/**/*.specHelper.ts'
  ];

  return  gulp.src(files)
    .pipe(plugins.coverage.instrument({
      pattern: instrumentFiles,
      debugDirectory: 'debug'
    }))
  // gulp-jasmine works on filepaths so you can't have any plugins before it
    .pipe(plugins.jasmine({
      reporter: [
        new SpecReporter()
      ]
    }))
    .pipe(plugins.coverage.gather())
    .pipe(plugins.coverage.format({ reporter: 'json' }))
    .pipe(gulp.dest('reports'));

};
