import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';

import Config from './tools/config';
import {loadTasks} from './tools/utils';


loadTasks(Config.TASKS_PATH);

/**
 * WORKFLOW TASKS
 */
gulp.task('dev', (done: any) =>
  runSequence(
    'set.featureA',
    'build.dev',
    done));

// --------------
// Build prod
gulp.task('prod', (done: any) =>
  runSequence(
    'clean.prod',
    'scss.compile.all',
    'build.prod',
    'serve.prod',
    done));

gulp.task('test', (done: any) =>
  runSequence(
    'scss.compile.all',
    'build.jspm.test.config',
    'clean.unitTest.reports',
    'karma.start',
    done));

gulp.task('test.watch', (done: any) =>
  runSequence(
    'scss.compile.all',
    'build.jspm.test.config',
    'clean.unitTest.reports',
    'karma.start.continuous',
    done));

gulp.task('e2e', ['e2e.dev']);

gulp.task('package', (done: any) =>
  runSequence(
    'clean.prod',
    'scss.compile.all',
    'build.prod',
    done));

gulp.task('scss', (done: any) =>
  runSequence(
    'scss.compile.main',
    'scss.compile.app',
    'scss.watch',
    done));

gulp.task('release', function (done: any) {
  runSequence(
    'bump',
    '_release',
    done);
});

gulp.task('release.build', function (done: any) {
  runSequence(
    'bump.build',
    '_release',
    done);
});

gulp.task('release.alpha', function (done: any) {
  runSequence(
    'bump.alpha',
    '_release',
    done);
});

gulp.task('release.beta', function (done: any) {
  runSequence(
    'bump.beta',
    '_release',
    done);
});

gulp.task('release.rc', function (done: any) {
  runSequence(
    'bump.rc',
    '_release',
    done);
});

gulp.task('release.patch', function (done: any) {
  runSequence(
    'bump.patch',
    '_release',
    done);
});

gulp.task('release.minor', function (done: any) {
  runSequence(
    'bump.minor',
    '_release',
    done);
});

gulp.task('release.major', function (done: any) {
  runSequence(
    'bump.major',
    '_release',
    done);
});

/**
 * SUB-TASKS
 */
// --------------
// scss

gulp.task('scss.compile.all', (done: any) =>
  runSequence(
    'scss.compile.main',
    'scss.compile.app',
    done));

// --------------
// Build dev.
gulp.task('build.dev', (done: any) =>
  runSequence(
    'scss',
    'build.index.dev',
    'serve.dev',
    done));

// --------------
// Build prod.

gulp.task('build.prod', (done: any) =>
  runSequence(
    'tslint',
    'build.js.prod',
    'prod.js.uglify',
    'clean.cacheBuster.js',
    'copy.assets.prod',
    'copy.favicon.prod',
    'copy.css.prod',
    'build.index.prod',
    done));

// --------------
// postinstall
gulp.task('postinstall', (done: any) =>
  runSequence(
    'copy.cssimports',
    done));


// --------------
// e2e serving dev.
gulp.task('e2e.dev', (done: any) =>
  runSequence(
    'clean.e2e.reports',
    'build.index.dev',
    'serve.dev.e2e',
    'protractor',
    done));

gulp.task('e2e.prod', (done: any) =>
  runSequence(
    'clean.prod',
    'clean.e2e.reports',
    'build.prod',
    'serve.prod.e2e',
    'protractor',
    done));

// --------------
// Clean all reports.
gulp.task('clean.reports', ['clean.e2e.reports', 'clean.unitTest.reports']);

// --------------
// Release

// Sub task, do not call directly
gulp.task('_release', function (done: any) {
  runSequence(
    'changelog',
    'commit.changes',
    'push.changes',
    'create.new.tag',
    'github.release',
    function (error: any) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('RELEASE FINISHED SUCCESSFULLY');
      }
      done(error);
    });
});


// --------------
// Features - Conditional Substitution


// Feature A
gulp.task('prod.featureA', (done: any) =>
  runSequence(
    'clean.prod',
    'build.js.prod.featureA',
    'build.prod',
    'serve.prod',
    done));

// Feature B
gulp.task('prod.featureB', (done: any) =>
  runSequence(
    'clean.prod',
    'build.js.prod.featureB',
    'build.prod',
    'serve.prod',
    done));

// Feature A
gulp.task('dev.featureA', (done: any) =>
  runSequence(
    'set.featureA',
    'build.dev',
    done));

// Feature B
gulp.task('dev.featureB', (done: any) =>
  runSequence(
    'set.featureB',
    'build.dev',
    done));
