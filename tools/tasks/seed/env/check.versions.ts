import Config from '../../../config';

function reportError(message: string) {
  console.error(require('chalk').white.bgRed.bold(message));
  process.exit(1);
}

export = () => {
  let exec = require('child_process').exec;
  let semver = require('semver');

  exec('npm --version',
    function(error: Error, stdout: NodeBuffer, stderr: NodeBuffer) {
      if (error !== null) {
        reportError('npm preinstall error: ' + error + stderr);
      }

      if (!semver.gte(stdout, Config.VERSION_NPM)) {
        reportError('NPM is not in required version! Required is ' + Config.VERSION_NPM + ' and you\'re using ' + stdout);
      }
    });

  exec('node --version',
    function(error: Error, stdout: NodeBuffer, stderr: NodeBuffer) {
      if (error !== null) {
        reportError('npm preinstall error: ' + error + stderr);
      }

      if (!semver.gte(stdout, Config.VERSION_NODE)) {
        reportError('NODE is not in required version! Required is ' + Config.VERSION_NODE + ' and you\'re using ' + stdout);
      }
    });
};
