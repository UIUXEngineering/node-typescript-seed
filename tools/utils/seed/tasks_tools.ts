import * as chalk from 'chalk';
import { existsSync, lstatSync, readdirSync  } from 'fs';
import * as gulp from 'gulp';
import * as util from 'gulp-util';
import * as isstream from 'isstream';
import { join  } from 'path';
import * as tildify from 'tildify';
import { argv  } from 'yargs';

/**
 * Loads the tasks within the given path.
 * @param {string} path the path to load the tasks from
 */
export function loadTasks(path: string): void {
  readDir(path, (taskname, path) => registerTask(taskname, path));
}

/**
 * Registers the task by the given taskname and path.
 * @param {string} taskname the name of the task
 * @param {string} path     the path of the task
 */
function registerTask(taskname: string, path: string): void {
  const TASK = join(path, taskname);

  if (argv['verbose']) {
    util.log('Registering task', chalk.yellow(tildify(taskname)));
  }

  gulp.task(taskname, (done: any) => {
    const task = require(TASK);
    if (task.length > 0) {
      return task(done);
    }

    const taskReturnedValue = task();
    if (isstream(taskReturnedValue)) {
      return taskReturnedValue;
    }

    // TODO: add promise handling if needed at some point.

    done();
  });
}

/**
 * Reads the files in the given root directory and executes the given
 * callback per found file.
 * @param {string}   root the root directory to read
 * @param {function} cb the callback to execute per found file
 */
function readDir(root: string, cb: (taskname: string, path: string) => void) {
  if (!existsSync(root)) {
    return;
  }

  walk(root);

  function walk(path: string) {

    if (argv['verbose']) {
      util.log('Loading tasks folder', chalk.green(path.replace(process.cwd(), '.')));
    }

    let files = readdirSync(path);
    for (let i = 0; i < files.length; i += 1) {
      let file = files[i];
      let curPath = join(path, file);
      if (lstatSync(curPath).isFile() && /\.ts$/.test(file)) {
        let taskname = file.replace(/\.ts$/, '');
        cb(taskname, path);
      } else {
        walk(curPath);
      }
    }
  }
}
