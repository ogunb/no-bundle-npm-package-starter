# No Bundle Package

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

No Bundle Package uses semantic release on CI to publish packages. (gitlab)

 It's important (or rather mandatory thanks to commitlint) that commit messages follows the format below.

For better experience you can use `npm run commit` script. This will run [commitizen](https://github.com/commitizen/cz-cli) with conventional settings and automatize your commit message.

## Commit message format


| Commit message                                                                                                                                                                                   | Release type               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release              |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release |

## API

Link to exported [API](./API.md)

Auto generate markdown file with `generate:docs` script.
