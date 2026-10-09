# Security notes

## Open Dependabot alerts without an installable fix

### `braces` — GHSA-vfj7-8cjw-p6xm / CVE-2026-93687

**Alert**: <https://github.com/marc-aurele-besner/golfalpine.ca/security/dependabot/200>
**Severity**: high (CVSS 7.5 — uncontrolled recursion / stack exhaustion DoS via deeply nested brace patterns)
**Vulnerable range**: `<= 3.0.3`
**First patched version**: none — `braces@3.0.3` (published 2024-05-21) is still the latest release on npm. The upstream maintainer disputes the report and has not tagged a fix (see <https://github.com/micromatch/braces/issues/70>).

#### How `braces` enters this tree

`braces@3.0.3` is a transitive dependency of `react-scripts@5.0.1` via two chains:

1. `react-scripts` → `eslint-webpack-plugin@3.2.0` → `micromatch@4.0.8` → `braces@3.0.3`
2. `react-scripts` → `tailwindcss@3.4.19` → `chokidar@3.6.0` → `braces@3.0.3`

`micromatch@4.0.8` (latest) still hard-depends on `braces: ^3.0.3`, so chain 1 cannot be closed by bumping micromatch. `chokidar@4+` no longer depends on `braces`, but forcing `chokidar@^4` does not eliminate `braces` from the tree (chain 1 still resolves it), and the major bump risks breaking `react-scripts`/`webpack-dev-server` integration.

#### Exposure analysis

`braces` is reached only through CRA's internal build tooling:

- `eslint-webpack-plugin` calls `braces` via `micromatch` to evaluate the ESLint file-glob patterns hard-coded in `react-scripts`' webpack config.
- `chokidar` calls `braces` via its glob watcher for file-watch patterns used by `tailwindcss`/`react-scripts` dev server.

In both cases the glob patterns originate from this project's static CRA configuration — there is no code path that accepts attacker-controlled input and forwards it to `braces.compile()`/`expand()`. The vulnerable code path (deeply nested brace patterns under the 10,001-character limit) is therefore **not exploitable** from any runtime or build-time input this app accepts.

#### Why this alert stays open

- No patched `braces` version exists upstream, and the maintainer has indicated no fix is planned.
- `react-scripts` is end-of-life (CRA is no longer maintained), so we cannot bump the parent to a version that drops `braces`.
- A permanent fix would require migrating off Create React App to an actively maintained bundler (Vite, Next.js, Remix). That is a substantial project change outside the scope of a Dependabot fix.

#### Action items when a fix becomes available

1. When `braces` ships a patched release (or a maintained fork becomes the de-facto replacement), update the `overrides` block in `package.json` to force it across all chains, then re-run `npm install`.
2. If `react-scripts` is replaced (e.g. by migrating to Vite), remove the override and re-evaluate this alert.
3. Until then, treat this alert as "tracked, exposure assessed, mitigation not yet available" and do not dismiss it in the Dependabot UI without an explicit decision from the project owner.