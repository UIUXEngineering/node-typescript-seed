import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import Config from '../../../config';

export = (done: any) => {

  let js: string = join(resolve('./' + Config.APP_SRC), '**', '*.js');
  let map: string = join(resolve('./' + Config.APP_SRC), '**', '*.map');

  Promise.all([
    rmfr(js, {glob: true}),
    rmfr(map, {glob: true})
  ])
    .then(() => {
      done();
    }).catch(() => {
      console.log('fail to clean.env');
  });

};
