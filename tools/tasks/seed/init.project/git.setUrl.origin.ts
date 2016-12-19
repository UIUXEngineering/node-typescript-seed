import { exec } from 'child_process';
import { JSONParse } from '../../../utils';

export = (done: any) => {

  let pkgJson = JSONParse('package.json');

  let url: string = pkgJson.repository.replace('git+https', 'https');
  let command = 'git remote set-url origin ' + url;

  // Only deletes tags locally, not remote
  exec(command, done);

};
