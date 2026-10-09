# Security notes

## Open Dependabot alerts without an installable fix

### `sprintf-js` — GHSA-hp3w-g68c-fv3c / CVE-2026-97058

**Alert**: <https://github.com/marc-aurele-besner/golfalpine.ca/security/dependabot/205>
**Severity**: medium (CVSS 5.3 — uncaught `RangeError` from `toFixed`/`toExponential`/`toPrecision` triggered by an out-of-range precision specifier; on the Node.js event loop the throw propagates to the default uncaught-exception policy and crashes the worker)
**Vulnerable range**: `<= 1.1.3`
**First patched version**: none — `sprintf-js@1.1.3` (published 2022-01-13) is still the latest release on npm. The upstream issue ([alexei/sprintf.js#237](https://github.com/alexei/sprintf.js/issues/237)) is open but no patched tag has been published.

#### How `sprintf-js` enters this tree

`sprintf-js@1.0.3` is a transitive dependency via a single chain:

`react-scripts@5.0.1` → `babel-plugin-istanbul@6.1.1` → `@istanbuljs/load-nyc-config@1.1.0` → `argparse@1.0.10` → `sprintf-js@1.0.3`

(`argparse@2.0.1` is also installed in the tree for `js-yaml` and friends; it does not depend on `sprintf-js`.)

#### Exposure analysis

The vulnerability requires an attacker-controlled *format string* to reach `sprintf()` (e.g. `%.101f`); data substituted as `%s` arguments is safe. The only consumer in this tree is `argparse@1.0.10`, which uses `sprintf` internally to format help text, error messages, and type descriptions. Every format string passed by `argparse` is hard-coded in the library itself; user input is passed as `%s` data via `util.format`-style substitution, never as the format string. The vulnerable code path is therefore **not reachable** from any runtime or build-time input this app accepts.

Additional mitigation by reachability:

- `babel-plugin-istanbul` is loaded by `react-scripts test` (Jest with coverage) and during babel transformations. It is not part of the bundle that ships to the browser, and no project code under `src/` or `public/` references `sprintf-js` directly (verified with `grep -rn "sprintf-js" src/ public/`).
- The build does not invoke any `argparse` CLI in this repo; the dependency is only loaded transitively if a coverage run happens to call into `@istanbuljs/load-nyc-config`.

#### Why this alert stays open

- No patched `sprintf-js` version exists upstream, so there is no `overrides` range that would force a fix (every published version is `<= 1.1.3`).
- `react-scripts@5.0.1` is end-of-life (CRA is no longer maintained), so we cannot bump the parent to a version that drops `@istanbuljs/load-nyc-config` or `argparse@1.x`.
- The exposure in this project is zero (no attacker-controlled format string reaches `sprintf`), so a local shim is disproportionate at this severity and would risk breaking `argparse`'s help/error formatting if the shim's implementation drifts from upstream semantics.

#### Action items when a fix becomes available

1. When `sprintf-js` ships a patched release (>= the version tagged in [alexei/sprintf.js#237](https://github.com/alexei/sprintf.js/issues/237)), add `"sprintf-js": ">=[patched]"` to `overrides` in `package.json` and re-run `npm install`.
2. Confirm `npm audit` no longer reports `GHSA-hp3w-g68c-fv3c`.
3. Remove this section from `SECURITY.md`.
4. If the upstream maintainer also rejects the report (as happened for `braces` — see below), escalate to a local shim along the same lines as `tools/braces-shim/`.

Until then, treat this alert as "tracked, exposure assessed, mitigation not yet available" and do not dismiss it in the Dependabot UI without an explicit decision from the project owner.

## Mitigated Dependabot alerts without an upstream fix

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
