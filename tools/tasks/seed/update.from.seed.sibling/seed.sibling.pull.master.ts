import { exec } from 'child_process';
import Config from '../../../config';

export = (done: any) => {

  // Only deletes tags locally, not remote
  exec('git pull origin master', {cwd: Config.SEED_SIBLING_DIR}, done);

};
