# node-typescript-seed

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Travis Build Status](https://travis-ci.org/UIUXEngineering/node-typescript-seed.svg?branch=develop)

A seed for NodeJS projects using typescript. 

This is a personal project to rapidly start node projects. Support is limited unless issues and requests are within the scope of my current work and needs, but PR's and collaborators are very welcome. 

# Table of Contents
- [Clone](#clone)
- [Install](#install)
- [Init Project](#init-project)
- [References](#references)
- [Releasing](#releasing)
- [Change Log](#change-log)
- [License](#license)

# References

- [tsconfig schema](http://json.schemastore.org/tsconfig)
- [tsconfig documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [typescript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [UMD examples](https://github.com/umdjs/umd)
- [UMD article](http://bob.yexley.net/umd-javascript-that-runs-anywhere/)


# Clone

Clone this seed.

```bash
$ git clone --depth 1 https://github.com/mgechev/angular-seed.git

```

Or pull master into your established *empty* repo. 

```bash
# add this repo as upstream remote to your repo.
$ git remote add upstream https://github.com/UIUXEngineering/node-typescript-seed.git

# pull from master
$ git pull upstream master
```

# Install

```bash
$ cd your repo

# install the project's dependencies
$ npm install
# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn

```

# Init Project

Update the ***name*** and ***repo url*** in the `package.json` file with your project information. Then run init with npm or yarn.

```bash
$ npm run init

# or

$ yarn run init
```

# Releasing

Gulp tasks to bump semantic versioning for major, minor, and patch. You need to be on
the master branch, and all files should be committed and pushed to master. I.E., these 
tasks will only bump semver in the package.json, push to master, push tag to github, 
and npm publish ( if configured ). 

```bash

# To release any version passed by --bump param
npm run release -- --bump [version]

# To bump and release build: 
# 1.2.3 to 1.2.3-build.0
# 1.2.3-build.0 to 1.2.3-build.1
npm run release.build

# To bump and release alpha: 
# 1.2.3 to 1.2.3-alpha.0
# 1.2.3-alpha.0 to 1.2.3-alpha.1
npm run release.alpha

# To bump and release beta: 
# 1.2.3 to 1.2.3-beta.0
# 1.2.3-beta.0 to 1.2.3-beta.1
npm run release.beta

# To bump and release rc: 
# 1.2.3 to 1.2.3-beta.0
# 1.2.3-beta.0 to 1.2.3-beta.1
npm run release.rc

# To bump and release patch 
# 1.2.3 to 1.2.4
# 1.2.3-rc.0 to 1.2.4
npm run release.patch

# To bump and release minor 
# 1.2.3 to 1.3.0
# 1.2.3-rc.0 to 1.3.0
npm run release.minor

# To bump and release major 
# 1.2.3 to 2.0.0
# 1.2.3-rc.0 to 2.0.0
npm run release.major

```


# Change Log

You can follow the [node-typescript-seed](http://github.com/UIUXEngineering/node-typescript-seed/blob/master/CHANGELOG.md).

# License

MIT
