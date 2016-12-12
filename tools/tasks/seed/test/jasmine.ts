import { fork } from 'child_process';

export = (done: any) => {

  // run jasmine.config.js in root directory
  fork(`jasmine.config`,
      [],
      {
        cwd: process.cwd()
      })
    .on('close', done);
};
