import { join, sep } from 'path';
import { argv } from 'yargs';
import * as _ from 'lodash';

/************************* DO NOT CHANGE ************************
 *
 * DO NOT make any changes in this file because it will
 * make your migration to newer versions of the seed harder.
 *
 * Your application-specific configurations should be
 * in project.config.ts. If you need to change any tasks
 * from './tasks' overwrite them by creating a task with the
 * same name in './projects'.
 *
 *****************************************************************/

/**
 * This class represents the basic configuration of the seed.
 * It provides the following:
 * - Constants for directories, ports, versions etc.
 */
export class SeedConfig {

  PACKAGE_JSON: any = {
    name: '@uiuxengineering/node-typescript-seed',
    repository: 'https://github.com/UIUXEngineering/node-typescript-seed.git'
  };

  /**
   * This seed clone url used
   * to set upstream
   */
  GIT_UPSTREAM_SEED_URL = `https://github.com/UIUXEngineering/node-typescript-seed.git`;
  SIBLING_PROJECT_NAME: string = 'node-typescript-seed';
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

  APP_SRC = 'src';
  CJS_DIR = 'cjs';
  COVERAGE_DIR = 'coverage';
  DIST_DIR = 'dist';
  DOCS_DIR = 'docs';
  ES6_DIR = 'es6';
  SAMPLES_DIR = 'samples';
  SEED_SIBLING_DIR = join('..', this.SIBLING_PROJECT_NAME);
  TASKS_DIR = 'tasks';
  TOOLS_DIR = 'tools';
  TYPES_DIR = 'types';
  UMD_DIR = 'umd';

  /**
   * Seed tasks which are composition of other tasks.
   */
  SEED_COMPOSITE_TASKS = join(process.cwd(), this.TOOLS_DIR, 'config', 'seed.tasks.json');

  /**
   * Project tasks which are composition of other tasks
   * and aim to override the tasks defined in
   * SEED_COMPOSITE_TASKS.
   */
  PROJECT_COMPOSITE_TASKS = join(process.cwd(), this.TOOLS_DIR, 'config', 'project.tasks.json');

  DIST_ES6 = join(this.DIST_DIR, this.ES6_DIR);
  DIST_CJS = join(this.DIST_DIR, this.CJS_DIR);
  DIST_UMD = join(this.DIST_DIR, this.UMD_DIR);

  /**
   * FILES
   */
  TS_ENTRY_FILENAME = 'index.ts';
  ES6_ENTRY_FILENAME = 'index.js';
  ES6_MOCKS_ENTRY_FILENAME = 'mocks.js';
  JS_BUNDLE_FILENAME = 'index.js';
  JS_MOCKS_BUNDLE_FILENAME = 'mocks.js';
  JS_BUNDLE_MIN_FILENAME = 'index.min.js';
  JS_MOCKS_BUNDLE_MIN_FILENAME = 'mocks.min.js';
  PROJECT_README_FILENAME = 'PROJECT_README.md';
  NPM_README_FILENAME = 'NPM_README.md';


  /**
   * COVERAGE
   */
  // for source directory
  COVERAGE_JSON = 'coverage-final.json';
  COVERAGE_BASE_SRC_DIR = join(this.COVERAGE_DIR, this.APP_SRC);
  COVERAGE_SRC_JSON_PATH = join(this.COVERAGE_BASE_SRC_DIR, this.COVERAGE_JSON);

  COVERAGE_BASE_SAMPLES_DIR = join(this.COVERAGE_DIR, this.SAMPLES_DIR);
  COVERAGE_SAMPLES_JSON_PATH = join(this.COVERAGE_BASE_SAMPLES_DIR, this.COVERAGE_JSON);

  /**
   * PATHS
   */
  SRC_PATH = join(process.cwd(), this.APP_SRC);


  /**
   * TASK PATHS
   */
  TASKS_PATH = join(process.cwd(), this.TOOLS_DIR, this.TASKS_DIR);

  SEED_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'seed');

  /**
   * SPECIFIC FILES
   */
  RESHRINKWRAP = join(process.cwd(), this.TOOLS_DIR, 'utils', 'seed', 'npm', 'reshrinkwrap');
  COPY_NPM_SHRINKWRAP = join(process.cwd(), this.TOOLS_DIR, 'utils', 'seed', 'npm', 'copy-npm-shrinkwrap');
  GIT_HOOKS_PATH = join(process.cwd(), this.TOOLS_DIR, 'git_hooks');

  TYPESCRIPT_ES6_CONFIG = {
    'declaration': true,
    'stripInternal': true,
    'experimentalDecorators': true,
    'module': 'es2015',
    'moduleResolution': 'node',
    'importHelpers': true,
    'sourceMap': true,
    'inlineSources': true,
    'target': 'es5',
    'skipLibCheck': true,
    'removeComments': true,
    'lib': [ 'es2015', 'dom' ]
  };

  TYPESCRIPT_CJS_CONFIG = ((_config) => {
    let config = _.cloneDeep(_config);

    // do not create *.d.ts files
    config['declaration'] = false;
    config['module'] = 'CommonJS';
    // config['suppressExcessPropertyErrors'] = true;

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
      sourceMap: true,
      globals:{
        'tslib':'tslib'
      }
    }
  };

  ROLLUP_MOCK_CONFIG = ((_config) => {
    let config = _.cloneDeep(_config);

    config.ROLLUP.entry = join(this.DIST_ES6, this.ES6_MOCKS_ENTRY_FILENAME);
    config.BUNDLE.dest = join(this.DIST_UMD, this.JS_MOCKS_BUNDLE_FILENAME);

    return config;

  })(this.ROLLUP_CONFIG);

  /**
   * The port where the application will run, if the `hot-loader` option mode
   * is used. The default hot-loader port is `5578`.
   *
   * @type {number}
   */
  HOT_LOADER_PORT                         = 5578;
  SERVER_SRC_PORT                         = 8090;
  SERVER_SAMPLES_PORT                     = 8095;

  DOWNLOAD_DOCS: any = [
    {
      url: 'https://raw.githubusercontent.com/Reactive-Extensions/RxJS/master/doc/gettingstarted/which-instance.md',
      file: 'rxjs/which-instance.md'
    },
    {
      url: 'https://raw.githubusercontent.com/Reactive-Extensions/RxJS/master/doc/gettingstarted/which-static.md',
      file: 'rxjs/which-static.md'
    },
    {
      url: 'https://raw.githubusercontent.com/Reactive-Extensions/RxJS/master/doc/api/core/observable.md',
      file: 'rxjs/observable.md'
    },
    {
      url: 'https://raw.githubusercontent.com/ReactiveX/rxjs/master/MIGRATION.md',
      file: 'rxjs/MIGRATION.md'
    }
  ];

  SEED_DOCS: any = [
    {
      url: 'https://raw.githubusercontent.com/UIUXEngineering/node-typescript-seed/master/README.md',
      file: this.PROJECT_README_FILENAME
    }
  ];

  SEED_SIBLING_COPY: any = [
    join(this.SEED_SIBLING_DIR, '**', '*'),
    '!' + join(this.SEED_SIBLING_DIR, '.git' + '{,' + sep + '**}'),
    '!' + join(this.SEED_SIBLING_DIR, 'coverage' + '{,' + sep + '**}'),
    '!' + join(this.SEED_SIBLING_DIR, 'dist' + '{,' + sep + '**}'),
    '!' + join(this.SEED_SIBLING_DIR, 'node_modules' + '{,' + sep + '**}'),
    '!' + join(this.SEED_SIBLING_DIR, 'src' + '{,' + sep + '**}'),
    '!' + join(this.SEED_SIBLING_DIR, 'tools', 'config', 'project.config.ts'),
    '!' + join(this.SEED_SIBLING_DIR, 'tools', 'config', 'project.tasks.json'),
    '!' + join(this.SEED_SIBLING_DIR, 'tools', 'tasks', 'project' + '{,' + sep + '**}'),
    '!' + join(this.SEED_SIBLING_DIR, 'tools', 'utils', 'project' + '{,' + sep + '**}'),
    '!' + join(this.SEED_SIBLING_DIR, 'types' + '{,' + sep + '**}'),
    '!' + join(this.SEED_SIBLING_DIR, 'CHANGELOG.md'),
    '!' + join(this.SEED_SIBLING_DIR, 'gulpfile.ts'),
    '!' + join(this.SEED_SIBLING_DIR, 'README.md'),
    '!' + join(this.SEED_SIBLING_DIR, 'yarn.lock')
  ];

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

