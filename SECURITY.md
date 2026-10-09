# Security notes

## Open Dependabot alerts without an installable fix

*(none — see the "Mitigated" sections below.)*

## Mitigated Dependabot alerts without an upstream fix

### `sprintf-js` — GHSA-hp3w-g68c-fv3c / CVE-2026-97058

**Alert**: <https://github.com/marc-aurele-besner/golfalpine.ca/security/dependabot/205>
**Severity**: medium (CVSS 5.3 — uncaught `RangeError` from `toFixed`/`toExponential`/`toPrecision` triggered by an out-of-range precision specifier)
**Vulnerable range**: `<= 1.1.3`
**First patched version**: none — `sprintf-js@1.1.3` (published 2022-01-13) is still the latest release on npm. The upstream issue ([alexei/sprintf.js#237](https://github.com/alexei/sprintf.js/issues/237)) is open but no patched tag has been published; PR #238 was opened to clamp precision and closed unmerged, and the maintainer has filed a CNA dispute.

#### Mitigation

Add `"js-yaml": "^4.0.0"` to `overrides` in `package.json`. This dedupes the whole tree onto `js-yaml@4.3.2` (already present at the top level via `eslint`'s `@eslint/eslintrc`), which pulls in `argparse@^2.0.1` and drops `sprintf-js` from the dependency graph entirely. No shim, no upstream cooperation, and no source rewrite is required.

After this override:

- `npm ls sprintf-js --all` returns an empty tree.
- `package-lock.json` no longer contains any entry for `sprintf-js` or `argparse@1.x`.
- `npm audit` reports 0 vulnerabilities.
- The chain `react-scripts@5.0.1` → `babel-plugin-istanbul@6.1.1` → `@istanbuljs/load-nyc-config@1.1.0` resolves `js-yaml` to the hoisted `js-yaml@4.3.2`. `@istanbuljs/load-nyc-config` only uses `require('js-yaml').load(...)`, which is unchanged between `js-yaml@3` and `js-yaml@4`, so the test runner's `react-scripts test` workflow is unaffected.

#### Exposure analysis (preserved for context)

The vulnerability requires an attacker-controlled *format string* to reach `sprintf()` (e.g. `%.101f`); data substituted as `%s` arguments is safe. The only consumer in this tree was `argparse@1.0.10`, which uses `sprintf` internally to format hard-coded help/error strings. Every format string passed by `argparse` is hard-coded in the library itself, so the vulnerable code path was **not reachable** from any runtime or build-time input this app accepts. This override removes the package from the tree anyway so Dependabot auto-resolves the alert.

#### How to remove this mitigation

1. When `sprintf-js` ships a patched release on npm, drop `"js-yaml": "^4.0.0"` from `overrides` in `package.json`, re-run `npm install`, and confirm `npm audit` no longer reports `GHSA-hp3w-g68c-fv3c`.
2. If `js-yaml@3` is required by some future dependency and the override causes resolution conflicts, escalate to a local shim along the same lines as `tools/braces-shim/` (a workspace package named `sprintf-js` with `version: "1.1.4"` that re-implements the upstream source with the precision specifier clamped to `[0, 100]`).
3. If `react-scripts` is replaced (e.g. by migrating to Vite), re-evaluate whether any alerts remain for `sprintf-js`.

### `braces` — GHSA-vfj7-8cjw-p6xm / CVE-2026-93687

**Alert**: <https://github.com/marc-aurele-besner/golfalpine.ca/security/dependabot/200>
**Severity**: high (CVSS 7.5 — uncontrolled recursion / stack exhaustion DoS via deeply nested brace patterns)
**Vulnerable range**: `<= 3.0.3`
**First patched version upstream**: none — `braces@3.0.3` (published 2024-05-21) is still the latest release on npm and the [upstream maintainer disputes the report](https://github.com/micromatch/braces/issues/70).

#### How `braces` entered the tree

`braces@3.0.3` was a transitive dependency of `react-scripts@5.0.1` via two chains:

1. `react-scripts` → `eslint-webpack-plugin@3.2.0` → `micromatch@4.0.8` → `braces@3.0.3`
2. `react-scripts` → `tailwindcss@3.4.19` → `chokidar@3.6.0` → `braces@3.0.3`

`micromatch@4.0.8` (latest) hard-depends on `^3.0.3` and the CRA parent is end-of-life, so the chains cannot be closed by simply bumping parents.

#### Mitigation

A local patched build of `braces` lives in `tools/braces-shim/` and is hoisted as a single `braces@3.0.4` workspace package at `node_modules/braces`. Dependabot now sees no `<= 3.0.3` in `package-lock.json`, so the alert auto-resolves on `main`.

The shim:

- preserves the public surface (`braces`, `braces.parse`, `braces.stringify`, `braces.compile`, `braces.expand`, `braces.create`),
- introduces a `MAX_AST_DEPTH` constant (default 100) and throws a `SyntaxError` before pushing past that depth in `parse`, and
- threads a depth counter through the recursive walkers in `compile`, `expand`, and `stringify` to make the stack-exhaustion assertion enforceable even if a hostile AST is supplied directly to those entry points.

The approach is the smallest version of the upstream [PR #78 / #79 / #82 / #87](https://github.com/micromatch/braces/pulls) stack that actually closes the CVE: a recursion-depth guard rather than a literal-collapse rewrite.

#### Exposure analysis (preserved for context)

`braces` was reached only through CRA's internal build tooling (`eslint-webpack-plugin` via `micromatch`, and `chokidar` via `tailwindcss`), and only with patterns hard-coded in `react-scripts`'s webpack config. There is no code path that forwards attacker-controlled input to `braces.compile()`/`expand()`. The vulnerable input — deeply nested braces within the existing 10,001-character limit — was therefore not reachable from any runtime or build-time input the app accepts.

#### How to remove this mitigation

1. When `braces` ships a patched release (or a maintained fork becomes the de-facto replacement):
   - bump `tools/braces-shim/package.json` `version` past the upstream patched version (or, better, delete `tools/braces-shim/` and the `workspaces` entry in `package.json`),
   - add `"braces": ">=<patched>"` to `overrides` in `package.json`,
   - re-run `npm install` and verify `npm audit` no longer reports `GHSA-vfj7-8cjw-p6xm`,
   - remove this section from `SECURITY.md`.
2. If `react-scripts` is replaced (e.g. by migrating to Vite), delete `tools/braces-shim/`, drop the workspace, and re-evaluate whether any alerts remain for `braces`.
