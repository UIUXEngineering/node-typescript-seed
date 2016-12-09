import { join  } from 'path';
import { readTSConfig } from '../../utils';
import Config from '../../config';

export function createBuildConfig(buildConfig: any):any {

  let tsConfigPath = join(buildConfig.pathRelativeToSrc, buildConfig.tsconfigFilename);
  let tsconfig: any = readTSConfig(tsConfigPath);
  // tsconfig.out = join(buildConfig.pathRelativeToSrc, buildConfig.outputFileName);

  //Gulp build options
  let gulpParams: any = {
    src: join(Config.SRC, buildConfig.pathRelativeToSrc, buildConfig.fileName)
  };

  return {
    gulpParams: gulpParams,
    tsconfig: tsconfig
  }
}
