import * as fs from 'fs';
import { JSONParse } from '../../../utils';
import * as _ from 'lodash';
import Config from '../../../config';

export = (done: any) => {
  let pkgjson = JSONParse('package.json');

  let newPkgjson = _.merge(pkgjson, Config.INIT_PACKAGE_JSON);

  let pkjsonString = JSON.stringify(newPkgjson, null, 2);

  fs.writeFile('package.json', pkjsonString, (err) => {
    if (err) {
      done(err);
    } else {
      done();
    }
  });
};
