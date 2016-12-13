import * as browserSync from 'browser-sync';
import * as chokidarSocketEmitter from 'chokidar-socket-emitter';

import Config from '../../../config';

export = () => {

  chokidarSocketEmitter({
    port: Config.HOT_LOADER_PORT,
    path: Config.COVERAGE_DIR + '/',
    relativeTo: Config.COVERAGE_DIR + '/',
    dir: process.cwd()
  });

  browserSync.init(Config.BROWSER_SYNC_CONFIG_COVERAGE);

};
