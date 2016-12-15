import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import Config from '../../../config';
import { join, sep } from 'path';
var SpecReporter = require('jasmine-spec-reporter');

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  let tsSpecFiles = [
    join(Config.APP_SRC, '**', '*[spec].ts')
  ];


  return  gulp.src(tsSpecFiles)
  // gulp-jasmine works on filepaths so you can't have any plugins before it
    .pipe(plugins.jasmine({
      reporter: [
        new SpecReporter()
      ]
    }));

};
