import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import Config from '../../../config';
import { join, sep } from 'path';
import { normalizeSpecPath } from '../../../utils';
const SpecReporter = require('jasmine-spec-reporter');
const argv = require('yargs').argv;

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  let tsSpecFiles = [
    join(Config.APP_SRC, '**', normalizeSpecPath(argv.src))
  ];


  return  gulp.src(tsSpecFiles)
  // gulp-jasmine works on filepaths so you can't have any plugins before it
    .pipe(plugins.jasmine({
      reporter: [
        new SpecReporter()
      ]
    }));

};
