import * as fs from 'fs';

export function JSONParse(filePath: string) {

  // We parse the json file instead of using require because require caches
  // multiple calls so the version number won't be updated
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}
