import { join } from 'path';
import * as _ from 'lodash';
import { SeedConfig } from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

    PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
    INIT_PACKAGE_JSON: any;

    constructor() {
        super();

        this.ROLLUP_CONFIG.BUNDLE.globals['lodash'] = 'lodash';
        this.ROLLUP_CONFIG.BUNDLE.globals['@reactivex/rxjs'] = '@reactivex/rxjs';
        this.ROLLUP_CONFIG.ROLLUP['external'] = ['@reactivex/rxjs', 'lodash', 'tslib'];

        /**
         * Change to your custom project info here.
         *
         * Used in gulp tasks `reset.pkgjson` and `init.pkgjson.
         */
        this.PACKAGE_JSON = _.merge(this.PACKAGE_JSON, {
            name: '@uiuxengineering/node-typescript-seed',
            repository: 'https://github.com/UIUXEngineering/node-typescript-seed.git',
            scripts: {
                test: 'gulp test'
            }
        });

        /**
         * Used in gulp tasks `init.pkgjson`.
         *
         */
        this.INIT_PACKAGE_JSON = _.merge(this.PACKAGE_JSON, {
            version: '0.0.0'
        });

        // To add downloaded documentation
        let moreDocs: any[] = [
            {
                file: 'rxjs/introrx.md',
                url: 'https://gist.githubusercontent.com/staltz/868e7' +
                'e9bc2a7b8c1f754/raw/35cc1edb69b7175fd1308800a244410890bc9b5f/introrx.md'
            }
        ];

        this.DOWNLOAD_DOCS = _.concat(this.DOWNLOAD_DOCS, moreDocs);

    }

}
