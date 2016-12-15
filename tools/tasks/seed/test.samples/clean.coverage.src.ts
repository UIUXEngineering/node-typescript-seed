import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import Config from '../../../config';

export = (done: any) => {

  let testCJS: string = join(resolve('./' + Config.COVERAGE_DIR), Config.APP_SRC);

  Promise.all([
    rmfr(testCJS, {glob: true})])
    .then(() => {
      done();
    }).catch(() => {
      console.log('fail to clean.env');
  });

};
