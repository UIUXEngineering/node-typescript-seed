import { exec } from 'child_process';
import Config from '../../../config';

export = (done: any) => {

  exec(Config.COPY_NPM_SHRINKWRAP, done);

};
