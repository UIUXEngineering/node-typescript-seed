import { exec } from 'child_process';

export = (done: any) => {

  // Only deletes tags locally, not remote
  exec('git tag | xargs git tag -d', done);

};
