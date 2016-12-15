import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import Config from '../../../config';
import { join, sep } from 'path';

var SpecReporter = require('jasmine-spec-reporter');
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

const plugins = <any>gulpLoadPlugins();

export = () => {

  let cjsSpecFiles = [
    join(Config.APP_SRC, '**', '*[spec].js')
  ];

  return gulp.src(cjsSpecFiles)
    .pipe(plugins.jasmine({
      reporter: [
        new SpecReporter()
      ]
    }))
    .pipe(plugins.istanbul.writeReports({
      reporters: [ 'json'], //this yields a basic non-sourcemapped coverage.json file
      reportOpts: { dir: Config.COVERAGE_BASE_SRC_DIR }
    })).on('end', remapCoverageFiles); //remap

  //using remap-istanbul we can point our coverage data back to the original ts files
  function remapCoverageFiles() {
    return gulp.src(Config.COVERAGE_SRC_JSON_PATH)
      .pipe(remapIstanbul({
        // basePath: './src',
        reports: {
          'html': Config.COVERAGE_BASE_SRC_DIR,
          'text-summary': null
        }
      }));
  }
};
