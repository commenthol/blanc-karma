# blanc-karma

> A boilerplate for browser modules using karma and webpack

This is a boilerplate for a browser based modules using:

* [mocha][] tests,
* [karma][] in browser testing,
* [webpack][] and [babel][],
* [isparta-instrumenter][] for code coverage,
* [eslint][] using [standard][] syntax for code linting

The files contain examples to show the usage of the different tools in your code.

## Table of Contents

<!-- !toc (minlevel=2 omit="Table of Contents") -->

* [Description](#description)
  * [Example ...](#example-)
* [Contribution and License Agreement](#contribution-and-license-agreement)
* [License](#license)
* [References](#references)

<!-- toc! -->

## Description

Run the different tools from `npm`

* `npm test`      - Run tests with coverage (output is in `build/coverage`)
* `npm run tdd`   - Run tests with auto-watch
* `npm run lint`  - Linting the source

### Example ...


## Contribution and License Agreement

If you contribute code to this project, you are implicitly allowing your
code to be distributed under the ISC license. You are also implicitly
verifying that all code is your original work or correctly attributed
with the source of its origin and licence.

## License

Copyright (c) 2016 commenthol ([ISC License][])

See [LICENSE][] for more info.

## References

<!-- !ref -->

* [babel][babel]
* [eslint][eslint]
* [eslint-config-standard][eslint-config-standard]
* [eslint-plugin-standard][eslint-plugin-standard]
* [isparta-instrumenter][isparta-instrumenter]
* [jsdox][jsdox]
* [karma][karma]
* [LICENSE][LICENSE]
* [mocha][mocha]
* [standard][standard]

<!-- ref! -->

[LICENSE]: ./LICENSE
[mocha]: http://mochajs.org/
[eslint]: http://eslint.org
[eslint-plugin-standard]: https://github.com/xjamundx/eslint-plugin-standard
[eslint-config-standard]: https://github.com/feross/eslint-config-standard
[standard]: http://standardjs.com
[jsdox]: http://jsdox.org/
[isparta-instrumenter]: https://www.npmjs.com/package/isparta-instrumenter-loader
[babel]: https://babeljs.io/
[karma]: http://karma-runner.github.io
[webpack]: https://webpack.github.io/
[ISC License]: https://opensource.org/licenses/ISC