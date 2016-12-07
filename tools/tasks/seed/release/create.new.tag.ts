import * as fs from 'fs';
import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins = <any>gulpLoadPlugins();

export = (done: any) => {
  var version = getPackageJsonVersion();
  plugins.git.tag(version, 'Created Tag for version: ' + version, function (error: any) {
    if (error) {
      return done(error);
    }
    plugins.git.push('origin', 'master', {args: '--tags'}, done);
  });

  function getPackageJsonVersion () {
    // We parse the json file instead of using require because require caches
    // multiple calls so the version number won't be updated
    return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
  }
};
