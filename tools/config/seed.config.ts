import {join} from 'path';
import {argv} from 'yargs';
import * as cloneDeep from 'lodash/cloneDeep';

/************************* DO NOT CHANGE ************************
 *
 * DO NOT make any changes in this file because it will
 * make your migration to newer versions of the seed harder.
 *
 * Your application-specific configurations should be
 * in project.config.ts. If you need to change any tasks
 * from "./tasks" overwrite them by creating a task with the
 * same name in "./projects".
 *
 *****************************************************************/

/**
 * This class represents the basic configuration of the seed.
 * It provides the following:
 * - Constants for directories, ports, versions etc.
 */
export class SeedConfig {

  /**
   *
   * BUILD PARAMS
   */

  // Required js bundle module name. Needs to be dot notation.
  MODULE_NAME = 'typescript.seed';

  // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
  JS_BUNDLE_FORMAT = 'umd';


  /**
   * The flag for the debug option of the application.
   * The default value is `false`, which can be overriden by the `--debug` flag
   * when running `npm start`.
   * @type {boolean}
   */
  DEBUG = argv['debug'] || false;

  /**
   * BASE PATHS
   */

  SRC_DIR = 'src';
  TOOLS_DIR = 'tools';
  TASKS_DIR = 'tasks';
  ES6_DIR = 'es6';
  TYPES_DIR = 'types';
  UMD_DIR = 'umd';
  TMP_DIR = 'tmp';
  CJS_DIR = 'cjs';
  DIST_DIR = 'dist';

  DIST_ES6 = join(this.DIST_DIR, this.ES6_DIR);
  DIST_CJS = join(this.DIST_DIR, this.CJS_DIR);
  DIST_UMD = join(this.DIST_DIR, this.UMD_DIR);

  /**
   * FILES
   */
  TS_ENTRY_FILENAME = 'app.ts';
  ES6_ENTRY_FILENAME = 'app.js';
  JS_BUNDLE_FILENAME = 'app.umd.js';
  APP_TSCONFIG                            = 'app.tsconfig.json';

  /**
   * PATHS
   */
  SRC_PATH = join(process.cwd(), this.SRC_DIR);

  /**
   * TASK PATHS
   */
  TASKS_PATH = join(process.cwd(), this.TOOLS_DIR, this.TASKS_DIR);

  /**
   * SPECIFIC FILES
   */
  RESHRINKWRAP = join(process.cwd(), this.TOOLS_DIR, 'utils', 'seed', 'npm', 'reshrinkwrap');

  TYPESCRIPT_ES6_CONFIG = {
    "declaration": true,
    "stripInternal": true,
    "experimentalDecorators": true,
    "module": "es2015",
    "moduleResolution": "node",
    "sourceMap": true,
    "inlineSources": true,
    "target": "es5",
    "skipLibCheck": true,
    "lib": [ "es2015", "dom" ]
  };

  TYPESCRIPT_CJS_CONFIG = ((_config) => {
    let config = cloneDeep(_config);

    // do not create *.d.ts files
    config["declaration"] = false;
    config["module"] = "CommonJS";
    // config["suppressExcessPropertyErrors"] = true;

    return config;

  })(this.TYPESCRIPT_ES6_CONFIG);

  ROLLUP_CONFIG = {
    ROLLUP: {
      entry: join(this.DIST_ES6, this.ES6_ENTRY_FILENAME)
    },

    BUNDLE: {
      dest: join(this.DIST_UMD, this.JS_BUNDLE_FILENAME),

      // required for umd bundles
      moduleName: this.MODULE_NAME,

      // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
      format: this.JS_BUNDLE_FORMAT,
      sourceMap: true

    }
  };

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

