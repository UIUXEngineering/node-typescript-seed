import * as rmfr from 'rmfr';
import { join } from 'path';

import Config from '../../../config';

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = (done: any) => {

  let removePrePush = rmfr(join(Config.GIT_HOOKS_PATH, 'pre-push'));

  Promise.all([removePrePush])
    .then(() => {
      done();
    })
    .catch(() => {
      done('fail to remove hooks');
    });
};
