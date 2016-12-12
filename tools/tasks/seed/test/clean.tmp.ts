import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import Config from '../../../config';

export = (done: any) => {

  let tmp: string = join(resolve('./' + Config.TMP_DIR));

  Promise.all([
    rmfr(tmp, {glob: true})])
    .then(() => {
      done();
    }).catch(() => {
      console.log('fail to clean.env');
  });

};
