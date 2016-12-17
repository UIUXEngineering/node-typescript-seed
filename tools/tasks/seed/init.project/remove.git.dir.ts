import * as rmfr from 'rmfr';
import {  resolve } from 'path';

export = (done: any) => {

  let gitDir: string = resolve('./.git');

  Promise.all([
    rmfr(gitDir, {glob: true})])
    .then(() => {
      done();
    })
    .catch(() => {
      done('fail to remove .git dir');
  });

};
