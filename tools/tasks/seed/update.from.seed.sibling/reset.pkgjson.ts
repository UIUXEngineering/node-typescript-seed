import * as fs from 'fs';
import { JSONParse } from '../../../utils';
import * as _ from 'lodash';
import Config from '../../../config';

export = (done: any) => {
  let pkgjson = JSONParse('package.json');
  let version = _.clone(pkgjson.version);
  let description = _.clone(pkgjson.description);

  let newPkgjson = _.merge(pkgjson, Config.PACKAGE_JSON);
  newPkgjson.version = version;
  newPkgjson.description = description;

  let pkjsonString = JSON.stringify(newPkgjson, null, 2);

  fs.writeFile('package.json', pkjsonString, (err) => {
    if (err) {
      done(err);
    } else {
      done();
    }
  });
};
