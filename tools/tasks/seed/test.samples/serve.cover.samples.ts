import { createServer } from '../../../utils';
import { join, sep } from 'path';
import Config from '../../../config';

export = () => {

  createServer(join(Config.COVERAGE_DIR, Config.SAMPLES_DIR) + sep, Config.SERVER_SAMPLES_PORT)

};
