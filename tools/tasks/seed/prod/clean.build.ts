import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import Config from '../../../config';

export = (done: any) => {

  let es6: string = join(resolve('./' + Config.ES6));
  let types: string = join(resolve('./' + Config.TYPES));

  Promise.all([rmfr(es6, {glob: true}), rmfr(types, {glob: true})])
    .then(() => {
      done();
    }).catch(() => {
      console.log('fail to clean.env');
  });

};
