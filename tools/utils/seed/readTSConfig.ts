import * as fs from 'fs';
import { join  } from 'path';
import Config from '../../config';

export function readTSConfig(fileName: string) {

  let pathToConfig: string = join(Config.SRC_PATH, fileName);

  // We parse the json file instead of using require because require caches
  // multiple calls so the version number won't be updated
  return JSON.parse(fs.readFileSync(pathToConfig, 'utf8'));
}
