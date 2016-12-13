import * as fs from 'fs';
import { regexExt  } from './validate.extension';
import { inc  } from 'semver';

function getPackageJsonVersion () {
  // We parse the json file instead of using require because require caches
  // multiple calls so the version number won't be updated
  return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
}

/**
 * Bump build
 *
 * Examples
 * 1.2.3 -> 1.2.3-build.1
 * 1.2.3-build.1 -> 1.2.3-build.2
 *
 * @returns {string}
 */
export function incSemverBuild(): string {
  var version = getPackageJsonVersion();
  var buildNumber: number;

  // strip off and '-' versioning such as 1.2.3-beta.1
  var newVersion: string = version.split('-')[0];

  if (version.indexOf('build') !== -1) {
    // get build number and increment
    buildNumber = Number(regexExt(version)[0].replace('.', '')) + 1;
  } else {
    buildNumber = 0;
  }

  return newVersion + '-build.' + buildNumber;
}

/**
 * Bump alpha
 *
 * Examples
 * 1.2.3 -> 1.2.3-alpha.1
 * 1.2.3-alpha.1 -> 1.2.3-alpha.2
 *
 * @returns {string}
 */
export function incSemverAlpha(): string {
  var version = getPackageJsonVersion();
  var buildNumber: number;

  // strip off and '-' versioning such as 1.2.3-beta.1
  var newVersion: string = version.split('-')[0];

  if (version.indexOf('alpha') !== -1) {
    // get build number and increment
    buildNumber = Number(regexExt(version)[0].replace('.', '')) + 1;
  } else {
    buildNumber = 0;
  }

  return newVersion + '-alpha.' + buildNumber;
}

/**
 * Bump beta
 *
 * Examples
 * 1.2.3 -> 1.2.3-beta.1
 * 1.2.3-beta.1 -> 1.2.3-beta.2
 *
 * @returns {string}
 */
export function incSemverBeta(): string {
  var version = getPackageJsonVersion();
  var buildNumber: number;

  // strip off and '-' versioning such as 1.2.3-beta.1
  var newVersion: string = version.split('-')[0];

  if (version.indexOf('beta') !== -1) {
    // get build number and increment
    buildNumber = Number(regexExt(version)[0].replace('.', '')) + 1;
  } else {
    buildNumber = 0;
  }

  return newVersion + '-beta.' + buildNumber;
}

/**
 * Bump release candidate ( rc )
 *
 * Examples
 * 1.2.3 -> 1.2.3-rc.1
 * 1.2.3-rc.1 -> 1.2.3-rc.2
 *
 * @returns {string}
 */
export function incSemveRC(): string {
  var version = getPackageJsonVersion();
  var buildNumber: number;

  // strip off and '-' versioning such as 1.2.3-beta.1
  var newVersion: string = version.split('-')[0];

  if (version.indexOf('rc') !== -1) {
    // get build number and increment
    buildNumber = Number(regexExt(version)[0].replace('.', '')) + 1;
  } else {
    buildNumber = 0;
  }

  return newVersion + '-rc.' + buildNumber;
}

/**
 * Bump patch
 *
 * Examples
 * 1.2.3 -> 1.2.4
 * 1.2.3-build.1 -> 1.2.4
 *
 * @returns {string}
 */
export function incSemverPatch(): string {
  var version = getPackageJsonVersion();

  // strip off and '-' versioning such as 1.2.3-beta.1
  var newVersion: string = version.split('-')[0];
  newVersion = inc(newVersion, 'patch');

  return newVersion;
}

/**
 * Bump minor
 *
 * Examples
 * 1.2.3 -> 1.3.0
 * 1.2.3-build.1 -> 1.3.0
 *
 * @returns {string}
 */
export function incSemverMinor(): string {
  var version = getPackageJsonVersion();

  // strip off and '-' versioning such as 1.2.3-beta.1
  var newVersion: string = version.split('-')[0];
  newVersion = inc(newVersion, 'minor');

  return newVersion;
}

/**
 * Bump major
 *
 * Examples
 * 1.2.3 -> 2.0.0
 * 1.2.3-build.1 -> 2.0.0
 *
 * @returns {string}
 */
export function incSemverMajor(): string {
  var version = getPackageJsonVersion();

  // strip off and '-' versioning such as 1.2.3-beta.1
  var newVersion: string = version.split('-')[0];
  newVersion = inc(newVersion, 'major');

  return newVersion;
}

