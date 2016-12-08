import { exec } from 'child_process';
import Config from '../../../config';

export = (done: any) => {

  exec(Config.RESHRINKWRAP, done);

};
