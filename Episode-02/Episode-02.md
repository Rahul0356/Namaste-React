
# Episode 02 – Igniting Our App

# _Episode 02 - Igniting Our App_

## Q: What is `npm`?

A: `npm` is the world's largest Software Registry. The registry contains over 800,000 code packages. Open-source developers use `npm` to share software.

npm is lots of things:

- `npm` is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.

- The `npm` Registry is a public collection of packages of open-source code for` Node.js, front-end web apps, mobile apps, robots, routers`, and countless other needs of the JavaScript community.
- `npm` alternative is `yarn`

### How to initialize `npm`?

```
npm init
```

`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.

- `npm` is the command line client that allows developers to install and publish those packages.

## Q: What is Vite / Webpack? Why do we need them?

A: Vite and Webpack are module bundlers/build tools used to bundle,
optimize, and serve JavaScript or TypeScript applications.

Why we need them:
- Combine multiple JS files
- Minify and compress code
- Faster load time
- Better production performance

---

## Q: Why do we need a bundler?

Without bundler:
- Multiple JS file requests
- Slow performance
- No optimization

With bundler:
- Optimized bundles
- Faster load time
- Cleaner production code

---

## Q: Vite Installation & Commands

Create Vite project:
```

npm create vite@latest

```

Start dev server:
```

npm run dev

```

Production build:
```

npm run build

```

Preview production build:
```

npm run preview

```

---

## Q: What is node_modules?

A:
- Contains installed dependencies
- Auto-generated folder
- Very large in size
- Can be recreated using `npm install`

❌ Do not push to GitHub  
✅ Add to `.gitignore`

---

## Q: What is `npx`?

A: `npx` stands for `Node Package eXecute`. It is simply an `npm` package runner. It allows developers to execute any Javascript Package available on the npm registry without even installing it. npx is installed automatically with npm version 5.2.

## Q: dependencies vs devDependencies

dependencies:
- Required in production

devDependencies:
- Required only during development

Example:
```json
"dependencies": {
  "react": "^18.0.0"
},
"devDependencies": {
  "vite": "^5.0.0"
}
````

---

## Q: What is Tree Shaking?

A:
Tree Shaking removes unused code from the final production bundle.
Also known as dead code elimination.

Supported by:

* Vite
* Webpack
* Rollup

---

## Q: What is Hot Module Replacement (HMR)?

A:
HMR updates only the changed module without reloading the full page.

Benefits:

* Faster development
* Preserves app state
* Instant updates

---

## Q: Superpowers of Vite

* Fast dev server
* Hot Module Replacement
* ES Modules support
* Code splitting
* Optimized production build

---

## Q: What is .gitignore?

A:
.gitignore tells Git which files to ignore.

Common entries:

```
node_modules/
dist/
.env
```

---

## Q: package.json vs package-lock.json

package.json:

* Project metadata
* Dependency ranges
* Can be edited

package-lock.json:

* Exact dependency versions
* Auto-generated
* Ensures consistency

---

## Q: Why should we not edit package-lock.json?

* Auto-generated file
* Maintains exact dependency tree
* Editing may break consistency

✅ Always commit
❌ Never edit manually

---

## Q: What is dist folder?

A:

* Contains production-ready code
* Minified and optimized files
* Used for deployment

❌ Do not commit
✅ Add to `.gitignore`

---

## Q: What is browserslist?

A:
Browserslist defines which browsers your app supports.

Used by:

* Vite
* Webpack
* Babel
* Autoprefixer

Example:

```json
"browserslist": [
  "last 2 versions",
  "> 1%"
]
```

