import * as gulp from 'gulp';
import * as util from 'gulp-util';
import * as runSequence from 'run-sequence';

import Config from './tools/config';
import { loadTasks, loadCompositeTasks } from './tools/utils';
import { checkEnvironment } from './tools/utils';

export function loadSeedTasks() {
  checkEnvironment({
    requiredNpmVersion: '>=3.5.3 <4.0.0',
    requiredNodeVersion: '>=5.4.1 <7.0.0',
    shrinkwrap: false
  });

  loadTasks(Config.SEED_TASKS_DIR);
  loadTasks(Config.PROJECT_TASKS_DIR);

  loadCompositeTasks(Config.SEED_COMPOSITE_TASKS, Config.PROJECT_COMPOSITE_TASKS);

  // --------------
  // Clean dev/coverage that will only run once
  // this prevents karma watchers from being broken when directories are deleted
  // let firstRun = true;
  // gulp.task('clean.once', (done: any) => {
  //   if (firstRun) {
  //     firstRun = false;
  //     runSequence('check.tools', 'clean.dev', 'clean.coverage', done);
  //   } else {
  //     util.log('Skipping clean on rebuild');
  //     done();
  //   }
  // });
}
