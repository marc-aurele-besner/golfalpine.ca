# Security notes

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
