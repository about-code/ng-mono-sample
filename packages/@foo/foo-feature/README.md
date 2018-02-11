# @foo/foo-feature

Demo of a feature package

# How to consume in your app

## Import via ECMAScript Module Syntax

```
import {Foo} from "@foo/foo-feature";
```

## When bundling your app with Webpack...

Webpack will resolve ES-Module imports automatically.

## When bundling your app with Rollup...

See [Rollup Docs](https://rollupjs.org/#using-rollup-with-npm) on how to use Rollup with npm packages.

## When loading an unbundled app in the browser via SystemJS module loader..

We assume a directory structure
```
   ${WEB_ROOT}
       |- node_modules
       |       |-@foo
       |              |- foo-feature
       |                     |- dist
       |                          |- @foo
       |                                  |- foo-feature.es5.umd.js
       |- index.html
```
with `index.html` at the root of a directory which is served from a
context root `/your-context-root`.  The SystemJS configuration in `index.html`
may use the `map` configuration to map `@foo/foo-feature` to the UMD version
of the lib.

```javascript
System.config({
    baseURL: '/your-context-root/node_modules',
    map: {
        '@foo/foo-feature': '@foo/foo-feature/dist/@foo/foo-feature.es5.umd.js'
    }
    ...
});
```

# Further Reading
- Building Angular Libraries (https://www.youtube.com/watch?v=unICbsPGFIA)
