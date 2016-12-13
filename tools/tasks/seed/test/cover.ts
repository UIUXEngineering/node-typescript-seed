import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

var SpecReporter = require('jasmine-spec-reporter');
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  let cjsSpecFiles = [
    'src/**/*[spec].js'
  ];

  return gulp.src(cjsSpecFiles)
    .pipe(plugins.jasmine({
      reporter: [
        new SpecReporter()
      ]
    }))
    .pipe(plugins.istanbul.writeReports({
      reporters: [ 'json' ] //this yields a basic non-sourcemapped coverage.json file
    })).on('end', remapCoverageFiles); //remap

  //using remap-istanbul we can point our coverage data back to the original ts files
  function remapCoverageFiles() {
    return gulp.src('./coverage/coverage-final.json')
      .pipe(remapIstanbul({
        // basePath: './src',
        reports: {
          'html': './coverage',
          'text-summary': null
        }
      }));
  }
};
