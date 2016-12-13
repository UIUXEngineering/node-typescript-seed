import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import Config from '../../../config';

export = (done: any) => {

  let es6: string = join(resolve('./' + Config.DIST_ES6));
  let types: string = join(resolve('./' + Config.TYPES_DIR));
  let umd: string = join(resolve('./' + Config.DIST_UMD));
  let cjs: string = join(resolve('./' + Config.DIST_CJS));

  Promise.all([
    rmfr(es6, {glob: true}),
    rmfr(types, {glob: true}),
    rmfr(cjs, {glob: true}),
    rmfr(umd, {glob: true})])
    .then(() => {
      done();
    }).catch(() => {
      console.log('fail to clean.env');
  });

};
