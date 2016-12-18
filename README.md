# node-typescript-seed

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/UIUXEngineering/node-typescript-seed.svg?branch=develop)](https://github.com/UIUXEngineering/node-typescript-seed)
[![Build status](https://ci.appveyor.com/api/projects/status/fwcr3ulk3hwgrtwb/branch/develop?svg=true)](https://ci.appveyor.com/project/jerryorta-dev/node-typescript-seed/branch/develop)

A seed for TypeScript NodeJS projects. 

This project enables TDD ( Test Driven Development ) using Jasmine. It can generate coverage reports and has a document generator ( Angular 2 with Compodoc ).

Unit Tests are a required task of the `build` and `git push` commands.

This seed is designed to create consumable services, models ( for MVC ), business logic layers, or data access layers. You create anything that does not have a view or server specific code but is **consumed** by a view ( libraries and frameworks ) or servers ( Express ) such Angular 2, React, Express, or NodeJS or any library/framework that consumes TypeScript, ES6, CommonJS, or UMD.
 

# Features
- Develop with TypeScript
- Unit Testing with Jasmine
- Code Coverage
- Build ES6, CommonJS, and UMD formats
- Code Generator with Compodoc
- `.npmignore` stubbed.


# Table of Contents
- [Quick Start](#quick-start)

### Workflow
- [SRC](#src)
- [SAMPLES](#samples)
- [Add Jasmine Custom Matchers](#add-jasmine-custom-matchers)
- [Mocks](#mocks)
- [Update With This Seed](#update-with-this-seed)

### Common Tasks
- [Most Used Tasks](#most-used-tasks)
- [Build](#build)
- [Unit Test](#unit-test)
- [TS Lint](#ts-lint)
- [QA](#qa)
- [Samples](#samples)
- [Commiting Changes](#commiting-changes)
- [Releasing](#releasing)
- [Generate Documentation](#generate-documentation)
- [Downloading documentation](#downloading-documentation)
- [Shrinkwrap](#shrinkwrap)

### Process
- [Yarn and NPM](#yarn-and-npm)
- [Git Hooks](#git-hooks)
- [Environment Variables](#environment-variables)

### Project Info
- [Configs](#configs)
- [Change Log](#change-log)
- [References](#references)
- [License](#license)

# Quick Start

1. Create an empty project repo. The `init.project` task will push to that repo.

2. Clone this seed.

 ```bash
 # get a shallow copy of this seed
 $ git clone --depth 1 https://github.com/UIUXEngineering/node-typescript-seed.git [name-of-project]
 
 # change directories to your project
 $ cd [name-of-project]
 
 ```
 
3. In your package.json:

Update the name of your project as it will be published to the npm registry.

Example:
```json
    
    // change  
    
    {
      "name": "@UIUXEngineering/node-typescript-seed"
      ...
    }
    
    // to 
    
    {
      "name": "@MyCompany/my-project-name"
      ...
    }
```

4. Replace repository url with your project's repository url

Example:
```json

     // change 
    {
    "repository": {
        "type": "git",
        "url": "git+https://github.com/UIUXEngineering/node-typescript-seed.git"
      },
      "bugs": {
        "url": "https://github.com/UIUXEngineering/node-typescript-seed/issues"
      },
      "homepage": "https://github.com/UIUXEngineering/node-typescript-seed#readme",
      
    }
    
    // to
    
    {
    "repository": {
        "type": "git",
        "url": "git+https://github.com/MyCompany/my-project-name.git"
      },
      "bugs": {
        "url": "https://github.com/MyCompany/my-project-name/issues"
      },
      "homepage": "https://github.com/MyCompany/my-project-name#readme",
      
    }
```

5. Init your project by running yarn commands.

```bash
    $ yarn install
    $ yarn init.project
```

**Ignore 'Your environment is not in a good shape' shrinkwrap warning.**

# Workflow
You have two dictories to work in -- `./src` and `./samples`.

## `./src`
Deliverable source code.

`./src` - develop your TypeScript deliverable code here. Keep your `*.spec.ts` files next to your source `*.ts` files. Place Jasmine Custom Matchers or any other spec heler files in the `./src/specHelpers` directory.

## `./samples`
Non-deliverable code.

`./samples` - code that is not included in build tasks. `./samples` is supported by Unit Tests, Code Coverage, and TSLint.

Samples Include:
- Design Patterns in TypeScript
- RXJS ( TODO )

## Add Jasmine Custom Matchers
When adding a custom matcher to the `./src/spec.helpers` dirctory, update the Jasmine Type Definintion file at `./tools/manual_typings/project/jasmine.d.ts` For examples, search for the following in the file:

```javascript

   /**
    * CUSTOM
    */
```

## Mocks
To facilitate better testing and consumption, create test mocks independently of your tests. You can then reuse the mocks in multiple tests and scenarios in both this project and your consumption projdct.

Mocks are built as a deliverable, but not included with application code. When consuming the application, you will **not** consume the mock code. You can then consume the mocks in unit tests of your consuming application separately.

## Update With This Seed
`yarn pull.upstream.seed`  

# Common Tasks
## Most Used Tasks
`yarn build` -- build  
`yarn qa` -- lint and test  
`yarn cover` -- code coverage    
`yarn serve` -- serve coverage report  

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
`yarn cover` -- code coverage  
`yarn serve` -- serve coverage report  
`yarn watch` -- watch unit test  
  
### `./samples` directory  
`yarn test.samples` -- unit test  
`yarn cover.samples` -- code coverage  
`yarn serve.samples` -- serve coverage report  
`yarn watch.samples` -- watch unit tests  
  
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


## Shrinkwrap
Use yarn as your package manager. It maintains a **yarn.lock** file that serves the same purpose as shrinkwrap. NPM shrinkwrap is not supported in this project, though there are helpful tasks set up if you want to get it working.
For more instrunctions on shrinkwrap, see [./tools/utils/seed/npm/npm-shrinkwrap.readme.md](./tools/utils/seed/npm/npm-shrinkwrap.readme.md).


# Process

## Yarn And NPM
This repo supports both yarn and npm. Yarn is the preferred package management tool. Npm is is maintained in case your build environment does not support yar.

For local development, *always use yarn*. When adding and removing npm modules, shrinkwrap is automatically updated.

You will see an error when installing / uninstall with yarn saying that npm-shrinkwrap is not respected. That is fine, nothing is broken. You are more than welecome to remove the shrinkwrap files and comment the tasks in the gulpFile.ts.



## Git Hooks
A git hook is used to run unit tests and tslint before pushing to the remote repository. The git hook is automatically installed as a `postinstall` npm script. You can manually run the install script using the command:

```bash
    $ node tools/utils/seed/npm/copy-npm-shrinkwrap
```

## Environment Variables
All NPM packages needed are installed globally to isolate your environment from others. On a **Mac**, you can run packages locally that would only work globally installed. To configure this, add an alias to your `.zshrc` or `.bash_profile`:

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
`gulp-tslint` requires a config in the root directory to run. This is the place to put your customcustom rules. This root config loads the seed config located at `./tools/config/seed.tslint.json`, which is the seed standard. It is located here so you have a fallback if you are overriding it with the config in the root directory. The `tslint` config in the tools directory loads tslint rules from the `codelyzer` npm module, a module specifically created for Angular 2 tslint rules.

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

## License

MIT
