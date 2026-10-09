# `tools/braces-shim/`

A local patched build of [`braces@3.0.3`](https://www.npmjs.com/package/braces) used by golfalpine.ca to mitigate [GHSA-vfj7-8cjw-p6xm / CVE-2026-93687](https://github.com/marc-aurele-besner/golfalpine.ca/security/dependabot/200) without an upstream fix.

`braces@3.0.3` (the latest npm release as of 2026-10-09) contains a stack-overflow in its recursive AST walkers (`lib/compile.js`, `lib/expand.js`, `lib/stringify.js`) and parser (`lib/parse.js`). The upstream maintainer disputes the report and has not tagged a fixed release.

## What this shim does

This is `braces@3.0.3` with a recursion-depth guard layered on top:

- `lib/constants.js` adds `MAX_AST_DEPTH: 100`.
- `lib/utils.js` adds `assertDepth(depth)` which throws a `SyntaxError` past the limit.
- `lib/parse.js` calls `utils.assertDepth(stack.length)` whenever it would push a new `(` or `{` frame.
- `lib/compile.js`, `lib/expand.js`, `lib/stringify.js` thread an explicit `depth` counter through their recursive walkers and call `assertDepth(depth)` at the top of each recursion.

`require('braces')` and the public API (`parse`, `stringify`, `compile`, `expand`, `create`) are unchanged. `node_modules/braces` is wired to this directory by the `workspaces` field at the repo root; `npm install` produces a single `node_modules/braces` symlink that both `eslint-webpack-plugin → micromatch` and `tailwindcss → chokidar` dedupe to, so the transitive `braces@3.0.3` references that previously triggered Dependabot alert #200 are no longer in `package-lock.json`.

## When to delete this

Delete this directory and drop the `"workspaces": ["tools/braces-shim"]` entry from `package.json` whenever:

- `braces` ships a patched release on npm (then `npm audit` will stop flagging it after a normal install), OR
- this project migrates off `react-scripts` (CRA) to an actively maintained bundler — `react-scripts` is end-of-life and most other stacks no longer pull in `braces` transitively.

See `../../SECURITY.md` for the full rationale.
