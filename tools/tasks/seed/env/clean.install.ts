import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

// import Config from '../../../config';

export = (done: any) => {

  let nodeModules: string = join(resolve('./' + 'node_modules'));

  Promise.all([rmfr(nodeModules, {glob: true})])
    .then(() => {
      done();
    }).catch(() => {
      console.log('fail to clean.env');
  });

};
