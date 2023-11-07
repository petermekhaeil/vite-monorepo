# vite-monorepo

This is a starter for [Vite](https://vitejs.dev/) in a monorepo setup.

## What's inside?

This starter uses [pnpm](https://pnpm.io/) as a package manager. The packages are [internal packages](https://turbo.build/repo/docs/handbook/sharing-code/internal-packages).

### Apps and Packages

- `apps/dashboard`: a Vite app
- `packages/maths`: a math library
- `packages/ui`: a stub React component library

### Tree Shaking

This starter also demonstrates how to get tree-shaking working in Vite dev servers for internal packages.

- Vite dev server doesn't play nice with [Barrel files](https://petermekhaeil.com/til/js-barrel-files/).
- It's common to see packages have an entry file (`index.ts`) and all the source code under a `src` folder.
- Internal packages are designed to not have a build step. The apps importing the packages want to reference the source for fast [HMR](https://vitejs.dev/guide/features.html#hot-module-replacement).

### How to import without a Barrel file?

#### Option 1: Package entry points

Using `exports` in package.json to export the `src` folder:

```json
"exports": {
    "./*": "./src/*/*.tsx"
}
```

See `packages/ui` for example usage.

Reference: [Node.js API: Package entry points](https://nodejs.org/api/packages.html#package-entry-points)

#### Option 2: Path aliases

Add a path alias to the app's `tsconfig.json`:

```json
"paths": {
    "maths/*": ["../../packages/maths/src/*"]
}
```

Configure path alias in `vite.config.ts`:

```js
resolve: {
  alias: {
    maths: path.resolve(__dirname, '../../packages/maths/src');
  }
}
```

See `packages/maths` for example usage.
