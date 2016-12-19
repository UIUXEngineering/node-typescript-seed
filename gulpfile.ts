import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';
import Config from './tools/config';
import { loadTasks } from './tools/utils';
import { checkEnvironment } from './tools/utils';

checkEnvironment({
  requiredNpmVersion: '>=3.5.3 <4.0.0',
  requiredNodeVersion: '>=5.4.1 <7.0.0',
  shrinkwrap: false
});

loadTasks(Config.TASKS_PATH);

/**
 * BUILD
 */
gulp.task('build', function (done: any) {
  runSequence(
    'qa',
    'clean.build',
    'build.es6',
    'build.cjs',
    'rollup.umd',
    'rollup.umd.mocks',
    'rollup.umd.uglify',
    'rollup.umd.uglify.mocks',
    done);
});

/**
 * QA SRC
 */
gulp.task('qa', function(done: any) {
  runSequence(
    'lint.src',
    'test.src',
    done);
});


gulp.task('qa.cover', function(done: any) {
  runSequence(
    'lint.src',
    'test.coverage.src',
    done);
});

/**
 * QA SAMPLES
 */
gulp.task('qa.samples', function(done: any) {
  runSequence(
    'lint.samples',
    'test.samples',
    done);
});


gulp.task('qa.cover.samples', function(done: any) {
  runSequence(
    'lint.samples',
    'test.coverage.samples',
    done);
});


/**
 * QA ENV
 */
gulp.task('qa.env', function(done: any) {
  runSequence(
    'lint.env',
    done);
});

/**
 * LINT
 */
gulp.task('lint', ['lint.src']);

/**
 * TEST SRC
 */
gulp.task('watch', ['watch.src']);
gulp.task('watch.src', function(done: any) {
  runSequence(
    'clean.test.cjs.src',
    'jasmine.src',
    'watch.src.dir',
    done);
});

gulp.task('test', ['test.src']);
gulp.task('test.src', function (done: any) {
  runSequence(
    'clean.test.cjs.src',
    'jasmine.src',
    done);
});

gulp.task('cover', ['coverage.src']);
gulp.task('coverage.src', function (done: any) {
  runSequence(
    'clean.coverage.src',
    'clean.test.cjs.src',
    'build.test.cjs.src',
    'instrument.src',
    'cover.src',
    done);
});


/**
 * TEST SAMPLES
 */
gulp.task('watch.samples', function(done: any) {
  runSequence(
    'clean.test.cjs.samples',
    'jasmine.samples',
    'watch.samples.dir',
    done);
});


gulp.task('test.samples', function (done: any) {
  runSequence(
    'clean.test.cjs.samples',
    'jasmine.samples',
    done);
});

gulp.task('cover.samples', ['coverage.samples']);
gulp.task('coverage.samples', function (done: any) {
  runSequence(
    'clean.coverage.samples',
    'clean.test.cjs.samples',
    'build.test.cjs.samples',
    'instrument.samples',
    'cover.samples',
    done);
});

/**
 * RELEASE
 */
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
    'git.add.commit.bump',
    'git.push.changes',
    'create.new.tag',
    'github.release',

    // update changelog and push to master
    'regenerate.changelog',
    'git.add.commit.bump',
    'git.push.changes',
    function (error: any) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('RELEASE FINISHED SUCCESSFULLY');
      }
      done(error);
    });
});

gulp.task('postinstall', function(done: any) {
  runSequence(
    // 'reshrinkwrap',
    done);
});

/**
 * INIT
 */
gulp.task('init.project', function (done: any) {
  runSequence(
    'init.readme',
    // 'remove.git.dir',
    // 'git.init',
    // 'git.add.remote.origin',
    'git.setUrl.origin',
    'git.delete.all.tags',
    'git.add.commit',
    'git.push.changes',
    'git.add.remote.upstream',
    'git.create.branch.upstream',
    'copy.githooks',
    done);
});

gulp.task('init.readme', function(done: any) {
  runSequence(
    // copies ./README.md to ./docs/PROJECT_README.md
    'archive.readme',

    // copies ./docs/NPM_README.md to ./README.md
    // replaces string tags with project information
    'init.npm.readme',
    done);
});

gulp.task('pull.upstream.seed', (done: any) => {
  runSequence(
    'git.checkout.branch.upstream',
    'git.pull.upstream.master',
    'git.checkout.develop',
    done);
});
