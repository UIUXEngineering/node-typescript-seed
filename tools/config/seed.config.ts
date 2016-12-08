import { join  } from 'path';
import { argv  } from 'yargs';

/************************* DO NOT CHANGE ************************
 *
 * DO NOT make any changes in this file because it will
 * make your migration to newer versions of the seed harder.
 *
 * Your application-specific configurations should be
 * in project.config.ts. If you need to change any tasks
 * from "./tasks" overwrite them by creating a task with the
 * same name in "./projects". For further information take a
 * look at the documentation:
 *
 * 1) https://github.com/mgechev/angular2-seed/tree/master/tools
 * 2) https://github.com/mgechev/angular2-seed/wiki
 *
 *****************************************************************/

/**
 * This class represents the basic configuration of the seed.
 * It provides the following:
 * - Constants for directories, ports, versions etc.
 * - Injectable application assets
 * - SystemJS configuration
 * - BrowserSync configuration
 */
export class SeedConfig {

  /**
   * The flag for the debug option of the application.
   * The default value is `false`, which can be overriden by the `--debug` flag
   * when running `npm start`.
   * @type {boolean}
   */
  DEBUG                                    = argv['debug'] || false;

  /**
   * BASE PATHS
  */

   // TOOLS DIRECTORIES
   // -------------
   TOOLS_DIR                               = 'tools';
   TASKS_DIR                               = 'tasks';


  /**
   * PATHS TO FILES
   */



  /**
   * PATHS
   */

  /**
   * TASK PATHS
   */
  TASKS_PATH                              = join(process.cwd(), this.TOOLS_DIR, this.TASKS_DIR);

  /**
   * SPECIFIC FILES
   */
  RESHRINKWRAP                            = join(process.cwd(), this.TOOLS_DIR, 'utils', 'seed', 'npm', 'reshrinkwrap');

  /**
   * The version of the application as defined in the `package.json`.
   */
  VERSION = appVersion();



  /**
   * The required NPM version to run the application.
   * @type {string}
   */
  VERSION_NPM = '2.14.2';

  /**
   * The required NodeJS version to run the application.
   * @type {string}
   */
  VERSION_NODE = '4.0.0';

}

/**
 * Returns the applications version as defined in the `package.json`.
 * @return {number} the applications version
 */
function appVersion(): number | string {
  var pkg = require('../../package.json');
  return pkg.version;
}

/**
 * Returns the linting configuration to be used for `codelyzer`.
 * @return {string[]} the list of linting rules
 */
function customRules(): string[] {
  var lintConf = require('../../tslint.json');
  return lintConf.rulesDirectory;
}

