import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';

import Config from './tools/config';
import {loadTasks} from './tools/utils';


loadTasks(Config.TASKS_PATH);

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



// --------------
// Release

// Sub task, do not call directly
gulp.task('_release', function (done: any) {
  runSequence(
    // 'changelog',
    'commit.changes',
    'push.changes',
    'create.new.tag',
    'github.release',

    // update changelog and push to master
    'regenerate.changelog',
    'commit.changes',
    'push.changes',
    function (error: any) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('RELEASE FINISHED SUCCESSFULLY');
      }
      done(error);
    });
});

