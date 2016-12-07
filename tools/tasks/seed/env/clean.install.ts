import * as rmfr from 'rmfr';
import { join, resolve } from 'path';

import Config from '../../../config';

export = (done: any) => {

  let jspmPackages: string = join(resolve('./' + Config.CLIENT_JSPM_PACKAGES_PATH));
  let nodeModules: string = join(resolve('./' + 'node_modules'));
  let typings: string = join(resolve('./' + 'typings'));

  Promise.all([rmfr(jspmPackages, {glob: true}), rmfr(nodeModules, {glob: true}), rmfr(typings, {glob: true})])
    .then(() => {
      done();
    }).catch(() => {
      console.log('fail to clean.env');
  });

};
