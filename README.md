# vite-monorepo

This is a starter for [Vite](https://vitejs.dev/) in a monorepo setup.

## What's inside?

This starter uses [pnpm](https://pnpm.io/) as a package manager. The packages are [internal packages](https://turbo.build/repo/docs/handbook/sharing-code/internal-packages).

This starter also demonstrates how to get tree-shaking working in Vite dev servers for internal packages.

### Why is this a big deal?

- Vite dev server doesn't play nice with [Barrel files](https://petermekhaeil.com/til/js-barrel-files/).
- It's common to see packages have an entry file (`index.ts`) and all the source code under a `src` folder.
- Internal packages do not have a build step. The apps importing the packages want to reference the source for fast [HMR](https://vitejs.dev/guide/features.html#hot-module-replacement).

### How to reference source code without a Barrel file?
