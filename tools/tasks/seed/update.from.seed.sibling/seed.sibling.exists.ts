import { existsSync } from 'fs';
// import * as gulpLoadPlugins from 'gulp-load-plugins';
import Config from '../../../config';

// const plugins = <any>gulpLoadPlugins();

export = (done: any) => {

  let err: any;
  try {
    existsSync(Config.SEED_SIBLING_DIR);
  } catch (_err) {
    err = _err;
    done('node-typescript-seed does not exist as a sibling');
  } finally {
    if (!err) {
      done();
    }
  }
};
