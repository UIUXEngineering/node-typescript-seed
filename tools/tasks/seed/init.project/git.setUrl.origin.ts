import { exec } from 'child_process';
import Config from '../../../config';


export = (done: any) => {

  let pkgJson = Config.INIT_PACKAGE_JSON;

  let url: string = pkgJson.repository.replace('git+https', 'https');
  let command = 'git remote set-url origin ' + url;

  // Only deletes tags locally, not remote
  exec(command, done);

};
