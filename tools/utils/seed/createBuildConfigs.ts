import { join  } from 'path';
import { JSONParse } from '../../utils';
import Config from '../../config';

export function createBuildConfig(buildConfig: any):any {

  let tsConfigPath = join(Config.SRC_DIR, buildConfig.pathRelativeToSrc, buildConfig.tsconfigFilename);
  let tsconfig: any = JSONParse(tsConfigPath);
  // tsconfig.out = join(buildConfig.pathRelativeToSrc, buildConfig.outputFileName);

  //Gulp build options
  let gulpParams: any = {
    src: join(Config.SRC_DIR, buildConfig.pathRelativeToSrc, buildConfig.fileName)
  };

  return {
    gulpParams: gulpParams,
    tsconfig: tsconfig
  }
}
