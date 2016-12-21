import * as fs from 'fs';
import { JSONParse } from '../../../utils';
import * as _ from 'lodash';
import Config from '../../../config';

export = (done: any) => {
  let pkgjson = JSONParse('package.json');
  let version = _.clone(pkgjson.version);

  pkgjson = _.merge(pkgjson, Config.PACKAGE_JSON);
  pkgjson.version = version;

  let pkjsonString = JSON.stringify(pkgjson, null, 2);

  fs.writeFile('package.json', pkjsonString, (err) => {
    if (err) {
      done(err);
    } else {
      done();
    }
  });
};
