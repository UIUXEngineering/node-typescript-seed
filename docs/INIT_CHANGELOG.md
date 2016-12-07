See [conventional-github-releaser readme](https://github.com/conventional-changelog/conventional-github-releaser) for full documentation.

To init a project with no git history:

Create an empty `CHANGELOG.md` file in the project root directory.

Commit your changes.

Create an initial release such as:

```bash

    $ run gulp release.alpha
```

Generate your initial changelog

```bash

    $ run gulp regenerate.changelog
```


If you have been using this project using tags but not releases, and now want to generate all previous releases, 
From the [docs](https://github.com/conventional-changelog/conventional-github-releaser) of conventional-github-releaser:

    If you first time use this tool and want to generate all previous releases, you could do

You can run:

```bash

    $ conventional-github-releaser -p angular -r 0
```

Or 

```bash

    $ npm run init.releaser
```
