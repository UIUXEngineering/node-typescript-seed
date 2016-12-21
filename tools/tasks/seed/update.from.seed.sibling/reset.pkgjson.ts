import * as fs from 'fs';
import { JSONParse } from '../../../utils';
import * as _ from 'lodash';
import Config from '../../../config';
import { getPropsCache } from '../../../utils';

export = (done: any) => {
  let pkgjson = JSONParse('package.json');
  let cache = getPropsCache();

  let newPkgjson = _.merge(pkgjson, Config.PACKAGE_JSON, cache.props);

  let pkjsonString = JSON.stringify(newPkgjson, null, 2);

  fs.writeFile('package.json', pkjsonString, (err) => {
    if (err) {
      done(err);
    } else {
      done();
    }
  });
};
