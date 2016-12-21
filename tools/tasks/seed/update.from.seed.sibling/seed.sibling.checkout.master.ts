import { exec } from 'child_process';
import Config from '../../../config';

export = (done: any) => {

  // Only deletes tags locally, not remote
  exec('git checkout master', {cwd: Config.SEED_SIBLING_DIR}, done);

};
