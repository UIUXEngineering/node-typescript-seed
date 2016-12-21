import { JSONParse } from '../../../utils';
import * as _ from 'lodash';
import { getPropsCache } from '../../../utils';

export = (done: any) => {
  let pkgjson = JSONParse('package.json');
  let cache = getPropsCache();

  let propsToSave: any = {
    version: _.clone(pkgjson.version),
    description: _.clone(pkgjson.description)
  };

  cache.props = propsToSave;

  done();
};
