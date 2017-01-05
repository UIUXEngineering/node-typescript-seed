import * as conventionalGithubReleaser from 'conventional-github-releaser';
import * as util from 'gulp-util';
import * as chalk from 'chalk';

export = (done: any) => {

  /**
   * See ./docs/INIT_PROJECT.md to set CONVENTIONAL_GITHUB_RELEASER_TOKEN
   * in your in environment.
   */
  if (!process.env.CONVENTIONAL_GITHUB_RELEASER_TOKEN) {
    util.log(chalk.red('process.env.CONVENTIONAL_GITHUB_RELEASER_TOKEN does not exist'));
    util.log(chalk.red('See docs/INIT_PROJECT.md to set this environment variable.'));
  } else {
    conventionalGithubReleaser({
      type: 'oauth',
      token: process.env.CONVENTIONAL_GITHUB_RELEASER_TOKEN // change this to your own GitHub token or use an environment variable
    }, {
      preset: 'angular' // Or to any other commit message convention you use.
    }, done);
  }

};


