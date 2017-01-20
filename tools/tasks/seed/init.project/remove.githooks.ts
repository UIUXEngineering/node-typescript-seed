import * as rmfr from 'rmfr';
import { join } from 'path';

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = (done: any) => {

  let removePrePush = rmfr(join('.git', 'hooks', 'pre-push'));

  Promise.all([removePrePush])
    .then(() => {
      done();
    })
    .catch(() => {
      done('fail to remove hooks');
    });
};
