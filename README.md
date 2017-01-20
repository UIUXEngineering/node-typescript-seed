# node-typescript-seed

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/UIUXEngineering/node-typescript-seed.svg?branch=develop)](https://github.com/UIUXEngineering/node-typescript-seed)
[![Build status](https://ci.appveyor.com/api/projects/status/fwcr3ulk3hwgrtwb/branch/develop?svg=true)](https://ci.appveyor.com/project/jerryorta-dev/node-typescript-seed/branch/develop)
[![dependencies Status](https://david-dm.org/UIUXEngineering/node-typescript-seed/status.svg)](https://david-dm.org/UIUXEngineering/node-typescript-seed)
[![devDependencies Status](https://david-dm.org/UIUXEngineering/node-typescript-seed/dev-status.svg)](https://david-dm.org/UIUXEngineering/node-typescript-seed?type=dev)

A seed for TypeScript NodeJS projects. 

This project enables TDD ( Test Driven Development ) using Jasmine, your custom Jasmine Matchers and code coverage remapped to your source TypeScript files.

Unit Tests are a required task of the `build` and `git push` commands.

This seed is designed to create consumable services, models ( for MVC ), business logic layers, or data access layers. You create anything that does not have a view or server specific code but is **consumed** by a view ( libraries and frameworks ) or servers ( Express ) such Angular 2, React, Express, or NodeJS or any library/framework that consumes TypeScript, ES6, CommonJS, or UMD.
 

# Features
- Develop with TypeScript
- Unit Testing with Jasmine
- Create custom Jasmine Matchers
- Code Coverage remapped to source TypeScript files
- Build ES6, CommonJS, and UMD formats
- Document Generator with Compodoc
- `.npmignore` stubbed.


# Table of Contents
- [Quick Start](#quick-start)

### Workflow
- [SRC](#src)
- [SAMPLES](#samples)
- [Add Jasmine Custom Matchers](#add-jasmine-custom-matchers)
- [Mocks](#mocks)
- [Update With This Seed](#update-with-this-seed)

### Common Gulp Tasks
- [Most Used Tasks](#most-used-tasks)
- [Configure Your Project Tasks](#configure-your-project-tasks)
- [Build](#build)
- [Unit Test](#unit-test)
- [TS Lint](#ts-lint)
- [QA](#qa)
- [Samples](#samples)
- [Commiting Changes](#commiting-changes)
- [Releasing](#releasing)
- [Generate Documentation](#generate-documentation)
- [Downloading documentation](#downloading-documentation)
- [Update Seed Readme](#update-seed-readme)
- [Shrinkwrap](#shrinkwrap)

### Process
- [Yarn and NPM](#yarn-and-npm)
- [Git Hooks](#git-hooks)
- [Environment Variables](#environment-variables)

### Project Info
- [Configs](#configs)
- [Change Log](#change-log)
- [References](#references)
- [Projects Using This Seed](#projects-using-this-seed)
- [License](#license)

# Quick Start
1. This project uses [yarn](https://yarnpkg.com/) for the default package manager instead of `npm`. See [install instructions](https://yarnpkg.com/en/docs/install) you do not already have `yarn` installed.

2. Create an empty project repo in your cloud service. The `init.project` task will push to that repo.

3. Clone this seed.

    *Note: Commit history may optionally be removed in the step "Initialize your project".*

     ```bash
     # to get a deep copy of this seed ( full git history )
     # you will have to update from seed using yarn pull.upstream.seed
     $ git clone https://github.com/UIUXEngineering/node-typescript-seed.git [name-of-project]
     
     # change directories to your project
     $ cd [name-of-project]
     ```
 
4. Update your project name, repository url, and initial semver:

    Update the name of your project as it will be published to the npm registry in the file `./tools/config/project.config.ts`
    ```javascript
        
        /**
         * Change to your custom project info here.
         */
        this.PACKAGE_JSON = _.merge(this.PACKAGE_JSON, {
          name: 'YOUR PROJECT NAME',                       // <- update with your project name, such as '@uiuxengineering/node-typescript-seed'
          repository: 'YOUR REPO URL',                     // <- update with your project name, such as 'https://github.com/UIUXEngineering/node-typescript-seed.git'
          'scripts' : {
            'test': 'gulp test'
          }
        });
     
        this.INIT_PACKAGE_JSON = _.merge(this.PACKAGE_JSON, {
           version: '0.0.0'                       // <- update if you want to start with a different semver
        });
     
           
    ```

5. yarn install.

    ```bash
        $ yarn install
    ```
    
6. Initialize `README.md`.  
   If you want to initialize your project's README.md with useful instructions
   to install from NPM, run:
   
   ```bash
       $ yarn init.readme
   ```
   
   This README.md will be archived to `./docs/PROJECT_README.md`, and replaced by `./docs/NPM_README.md`.
   
7. **Important**: Configure the gulp task to publish to the npm registry.  
   Currently, when you invoke a gulp release or initialize project task, a gulp task will publish this project to the npm registry for **public access**. 
   
   To use the feature, you need to add your user credentials to your `~/.npmrc` file using the command:
   
   ```bash
       $ npm adduser
    
       # will respond with with something like:
       # Username: username
       # Password: password
       # Email: (this IS public) your.email@domain.com
       # Logged in as username to scope @yourNpmScope on http://registry.npmjs.org/.
   ```
   
   This task configuration is set in the file `./tools/config/project.tasks.json`:
   
   **To publish with public access (default)**.  
   ```javascript
   
    {
        "_post.release": [
            "npm.publish.public"            // <-- npm publish gulp task
          ]
    }
   ``` 
   
   **To publish with private access**, change the task to `"npm.publish.private"`.  
    ```javascript
      
       {
           "_post.release": [
               "npm.publish.private"       // <-- npm publish gulp task
             ]
       }
    ``` 
      
   **To NOT publish to npm registry** remove the task from "_post.release".  
   ```javascript
         
      {
          "_post.release": [
               "npm.publish.none"            // <-- npm publish gulp task
             ]
      }
   ``` 
    
8. Initialize your project.

    **Option 1:** Keep the seed commit history.
    
    ```bash
        $ yarn init.project.keepHistory
    ```
        
    Makes updating your project with the latest seed changes **very easy**. The commit history is not very large and this seed's updates will be minimal ( it's near feature complete ), so your project will not see much project bloat.
   
    What will happen:  
    - package.json updated from the settings you set above.
        - properties updated from `INIT_PACKAGE_JSON` from the file `./tools/config/project.config.ts`.
        - defaults are project name, repository, and version.
    - Sets git remote origin to your repository url.
    - Removes all git tags cloned from seed.
    - Performs initial git commit.
    - Performs initial git tag.
    - Pushes initial commit and tag to your repo.
    - Publishes to NPM registry.
    - Copies git-hooks to `.git` directory.
    
    **Option 2:** Remove the seed commit history.
    
    ```bash
        $ yarn init.project.noHistory
    ```       
    Updating your project with the latest seed changes **more difficult**. But your commit history is absolutely clean.
    
    What will happen:  
    - All tasks from **Option 1**.
    - Deletes './git' directory, then Re-initializes local git repo to remove history and all tags.
    

# Workflow
You have two directories to work in -- `./src` and `./samples`.

## `./src`
Deliverable source code.

`./src` - develop your TypeScript deliverable code here. Keep your `*.spec.ts` files next to your source `*.ts` files. Place Jasmine Custom Matchers or any other spec heler files in the `./src/specHelpers` directory.

## `./samples`
Non-deliverable code.

`./samples` - code that is not included in build tasks. `./samples` is supported by Unit Tests, Code Coverage, and TSLint.

Samples Include:
- [Design Patterns in TypeScript](https://github.com/UIUXEngineering/node-typescript-seed/tree/master/samples/design_patterns_in_typescript)
- [RxJS](https://github.com/UIUXEngineering/node-typescript-seed/tree/master/samples/rxjs)

## Add Jasmine Custom Matchers
When adding a custom matcher to the `./src/spec.helpers` dirctory, update the Jasmine Type Definintion file at `./tools/manual_typings/project/jasmine.d.ts` For examples, search for the following in the file:

```javascript

   /**
    * CUSTOM
    */
```

## Mocks
To facilitate better testing and consumption, create test mocks independently of your tests. You can then reuse the mocks in multiple tests and scenarios in both this project and your consumption project.

Mocks are built as a deliverable, but not included with application code. When consuming the application, you will **not** consume the mock code. You can then consume the mocks in unit tests of your consuming application separately.

## Update With This Seed
`yarn update.from.sibling`
Use if you created this project using a shallow clone:
```bash
$ git clone --depth 1  https://github.com/UIUXEngineering/node-typescript-seed.git [name-of-project]
```

Before updating from seed:
- A clone of [node-typescript-seed](https://github.com/UIUXEngineering/node-typescript-seed) needs to be in a sibling directory of this project.
- There should be no uncommitted changes in this project.
- Create and checkout a branch named something like "update" to keep your "develop" and "master" branches safe.
- Any package.json properties you do not wish to be over-written, copy to the "PACKAGE_JSON" property in the file `./tools/config/project.config.ts`.

After updating from seed:
- Revert the name, description, and repository properties in the `package.json` file.
- Review all other changes to ensure you want to accept them.
- Commit your changes.
- Rebase with develop.
- Merge to develop.

`yarn pull.upstream.seed`
Use if you created this project using a deep clone:
```bash
$ git clone https://github.com/UIUXEngineering/node-typescript-seed.git [name-of-project]
```

# Common Tasks
## Most Used Tasks
`yarn build` -- build type definitions, es6, commonjs, and umd on `./src`  
`yarn test` -- run unit tests once on `./src`  
`yarn watch` -- run unit continuously on `./src`  
`yarn qa` -- lint and test on `./src`    
`yarn cover` -- run unit tests and code coverage on `./src`    
`yarn serve` -- serve coverage report for `./src` coverage  

## Configure Your Project Tasks
Care is taken to allow easier writing and *overriding* seed gulp tasks with your project tasks.

Write **your** gulp tasks in the `./tools/tasks/project/` directory. The following explains the task architecture.

Individual gulp tasks are created in the `.ts` files in the directories `./tools/tasks/seed` and 
`./tools/tasks/project`. The file names represent the task name. The directories
are scanned recursively so directory structure does not matter. Organize them however
you like *in your project directory*. Use the tasks in `./tools/tasks/seed/` as examples.

A 'composite' gulp task is simply the name of a group of tasks. For example, 
a normal gulp sequence of tasks is written as:

```javascript

    import * as gulp from 'gulp';
    import * as runSequence from 'run-sequence';

    gulp.task('build', function (done: any) {
      runSequence(
        'qa',
        'clean.build',
        'build.es6',
        'build.cjs',
        'rollup.umd',
        'rollup.umd.mocks',
        'rollup.umd.uglify',
        'rollup.umd.uglify.mocks',
        done);
    });
```

In the json file `./tools/config/seed.tasks.json`, this 'componsite' task is represented
 by 
 
 ```json
 
    {
      "build": [
          "qa",
          "clean.build",
          "build.es6",
          "build.cjs",
          "rollup.umd",
          "rollup.umd.mocks",
          "rollup.umd.uglify",
          "rollup.umd.uglify.mocks"
        ]
    }
 ```
 
 To end a task sequence with an error the error handler:
 
 ```typescript
    
    function handler(error: any) {
      if (error) {
        console.log(error.message);
      } else {
        console.log("FINISHED SUCCESSFULLY");
      }
      done(error);
    }
            
```

To use a general error handler task ( see line ~35 in `./tools/utils/seed/tasks_tools.ts`) 
end the sequence with the "report.success.error" task. For example:

```json

    {
      "_release": [
          "git.add.commit.bump",
          "git.push.changes",
          "create.new.tag",
          "github.release",
          "regenerate.changelog",
          "git.add.commit.bump",
          "git.push.changes",
          "report.success.error"   // <-- handler
        ]
    }
```

Configure **your** composite tasks in the json file `./tools/config/project.tasks.json`. They will
override the tasks in `./tools/config/seed.tasks.json` ( which you do NOT edit ) of the same
name in `./tools/config/seed.tasks.json`. 

## Build
*yarn command* `yarn build`

The build task runs unit tests, tslint and transpiles the `./src` directory to ES6, CommonJS, and UMD. UMD is generated from the ES6 files using rollup.

The deliverable includes application and mock code. For UMD, mocks are bundled in a separate file.

The transpiled code is output in the `./dist` directory:

```
    .
    ├── dist
    │   ├── cjs         <- CommonJS transpiled from ./src using gulp-typescript
    │   ├── es6         <- ES6 transpiled from ./src using gulp-typescript
    │   └── umd         <- UMD transpiled from ./dist/es6 using rollup
    └── types           <- TypeScript Type definitions using gulp-typescript
```

## Unit Test
### `./src` directory
`yarn test` -- unit test 
`yarn test -- --src=index` -- unit test (specific files)  
`yarn cover` -- code coverage  
`yarn serve` -- serve coverage report  
`yarn watch` -- watch unit test  
### `./samples` directory  
`yarn test.samples` -- unit test  
`yarn test.samples -- --src=typescript/*` -- unit test (specific files)  
`yarn cover.samples` -- code coverage  
`yarn serve.samples` -- serve coverage report  
`yarn watch.samples` -- watch unit tests  
`yarn watch.samples -- --src=typescript/*` -- watch unit tests (specific files)

**When running the `watch` command, do not run the `test` command.**

**Jasmine Type Definitions for Custom Matchers**
See [Add Jasmine Custom Matchers](#add-jasmine-custom-matchers) above.

## TS Lint
### `./src` directory
`yarn lint`

### `./samples` directory
`yarn lint.samples`

### project except for `./src` and `./samples`
`yarn lint.env`

## QA
Combines **lint** and **test** tasks for convenience of running one command.

### `./src` directory
`yarn qa` -- lint, test
`yarn qa.cover` -- lint, test, coverage report

### `./samples` directory
`yarn qa.samples` -- lint, test 
`yarn qa.cover.samples` -- lint, test, coverage report

## Samples
The `./samples` directory is your research and playground space to learn and try things which you not ready to place in `./src` code. The same test and coverage tools are available to allow TDD for your expirements.

## Commiting Changes

This project is commitizen friendly, where you may commit changes by running `cz` instead of `git commit`. 

`cz-conventional-changelog` is configured.  `cz-conventional-changelog` is the Angular teams commit message styleguide.

See [Commitizen Docs](https://github.com/commitizen/cz-cli) for instructions how to set up and use.

## Releasing

Gulp tasks to bump semantic versioning for major, minor, and patch. You need to be on
the master branch, and all files should be committed and pushed to master. I.E., these 
tasks will only bump semver in the package.json, push to master, push tag to github, 
and npm publish ( if configured ). 

```bash

# To release any version passed by --bump param
yarn release -- --bump [version]

# To bump and release build: 
# 1.2.3 to 1.2.3-build.0
# 1.2.3-build.0 to 1.2.3-build.1
yarn  release.build

# To bump and release alpha: 
# 1.2.3 to 1.2.3-alpha.0
# 1.2.3-alpha.0 to 1.2.3-alpha.1
yarn  release.alpha

# To bump and release beta: 
# 1.2.3 to 1.2.3-beta.0
# 1.2.3-beta.0 to 1.2.3-beta.1
yarn  release.beta

# To bump and release rc: 
# 1.2.3 to 1.2.3-beta.0
# 1.2.3-beta.0 to 1.2.3-beta.1
yarn  release.rc

# To bump and release patch 
# 1.2.3 to 1.2.4
# 1.2.3-rc.0 to 1.2.4
yarn  release.patch

# To bump and release minor 
# 1.2.3 to 1.3.0
# 1.2.3-rc.0 to 1.3.0
yarn  release.minor

# To bump and release major 
# 1.2.3 to 2.0.0
# 1.2.3-rc.0 to 2.0.0
yarn  release.major

```

## Generate Documentation
`yarn compodoc` -- generate documentation
`yarn serve.doc` -- serve documentation

## Downloading documentation
`yarn download.docs` 
 
External documentation may be downloaded and committed to this repo. See the `DOWNLOAD_DOCS` in the `./tools/config/seed.config.ts` file.

Add additional documentation in the file `./project.config.ts`;

## Update Seed Readme
`yarn update.seed.readme` 
To update `./docs/PROJECT_README.md` to the latest README.md from node-typescript-seed master.


## Shrinkwrap
Use yarn as your package manager. It maintains a **yarn.lock** file that serves the same purpose as shrinkwrap. NPM shrinkwrap is not supported in this project, though there are helpful tasks set up if you want to get it working.
For more instrunctions on shrinkwrap, see [./tools/utils/seed/npm/npm-shrinkwrap.readme.md](./tools/utils/seed/npm/npm-shrinkwrap.readme.md).


# Process

## Yarn And NPM
This repo supports both yarn and npm. Yarn is the preferred package management tool. Npm is maintained in case your build environment does not support yarn.

For local development, *always use yarn*. 


## Git Hooks
A git hook is used to run unit tests and tslint before pushing to the remote repository. The git hook is automatically installed as a `postinstall` npm script. You can manually run the install script using the command:

```bash
    $ node tools/utils/seed/npm/copy-npm-shrinkwrap
```

## Environment Variables
All NPM packages needed are installed locally to isolate your environment from others. On a **Mac**, you can run packages locally that would only work globally installed. To configure this, add an alias to your `.zshrc` or `.bash_profile`:

```bash
    alias run='PATH=$(npm bin):$PATH'
    
    # then run modules from local environment
    
    $ run gulp build
    $ run cz
```

# Project Info
## Configs

Unfortunately, there are many more configs than I would like to have ( more than one ). They all have a separate purpose, and if located in a peculiar place, there is a specific reason.

### project seed config
The seed config is used to drive gulp tasks for build, unit testing, code generation, etc. You should not edit this, as to enable you to upgrade your project from the seed master. You can override the seed with your own config file, which is already stubbed for you.

```bash

    # place your config overrides in this file
    ./tools/config/ 

```


### ts-node config
Node runs *.ts files in the `./tools` and root directory with the `ts-node` module. `ts-node` transpiles files at run time and serves them in memory rather than writing *.js transpiled files. The `ts-node` config to transpile files is located in the root directory:

```bash
   ./tsconfig.json
```

### tslint config
`gulp-tslint` requires a config in the root directory to run. This is the place to put your custom rules. This root config loads the seed config located at `./tools/config/seed.tslint.json`, which is the seed standard. It is located here so you have a fallback if you are overriding it with the config in the root directory. The `tslint` config in the tools directory loads tslint rules from the `codelyzer` npm module, a module specifically created for Angular 2 tslint rules.

Two tslint gulp tasks -- one for the environment and one for the `./src` directory -- use the same config in the root directory.


```bash

   # base config gulp-tslint loads for all tslint tasks
   # add your rules here
   ./tslint.json
   
   # loads
      
   ./tools/config/seed.tslint.json
   
   # which finally loads codelyzer, the Angular 2 tslint rules
   ./node_modules/codelyzer
      
```

### compodoc conpudoc
compodoc is an npm modules specifically designed to generate Angular 2 documentation. It *requires* it's tsconfig to be located in the src directory:

```bash
    ./src/compodoc.tsconfig.json
```

### travis-ci
Used to configure Travis-CI:

```bash

   .travis.yml
```

### Appveyor
Used to configure Appveyor:

```bash

   .appveyor.yml
```

## Change Log

You can follow the [node-typescript-seed](http://github.com/UIUXEngineering/node-typescript-seed/blob/master/CHANGELOG.md).

## References

- [tsconfig schema](http://json.schemastore.org/tsconfig)
- [tsconfig documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [typescript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [UMD examples](https://github.com/umdjs/umd)
- [UMD article](http://bob.yexley.net/umd-javascript-that-runs-anywhere/)
- [RXJS rxmarbles.com](http://rxmarbles.com/)
- [RXJS github](https://github.com/ReactiveX/rxjs)
- [RXJS docs](http://reactivex.io/rxjs/)
- [RXJS manual](http://reactivex.io/rxjs/manual/index.html)

# Projects Using This Seed
- [node-typescript-utils](https://github.com/UIUXEngineering/node-typescript-utils)
- [node-typescript-validate](https://github.com/UIUXEngineering/node-typescript-validate)

*Contributions ( PR's ) welcome*

## License

MIT
