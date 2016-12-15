import * as browserSync from 'browser-sync';
import * as chokidarSocketEmitter from 'chokidar-socket-emitter';
import { join, sep } from 'path';
import Config from '../../../config';

export = () => {

  chokidarSocketEmitter({
    port: Config.HOT_LOADER_PORT,
    path: join(Config.COVERAGE_DIR, Config.APP_SRC) + sep,
    relativeTo: join(Config.COVERAGE_DIR, Config.APP_SRC) + sep,
    dir: process.cwd()
  });

  browserSync.init(Config.BROWSER_SYNC_CONFIG_COVERAGE);

};
