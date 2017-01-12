import { createServer } from '../../../utils';
import { join, sep } from 'path';
import Config from '../../../config';

export = () => {

  createServer(join(Config.COVERAGE_DIR, Config.APP_SRC) + sep, Config.SERVER_SRC_PORT)

};
