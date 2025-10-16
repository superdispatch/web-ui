# @superdispatch/oxc-config

Shared [oxlint](https://oxc.rs/) configuration for Super Dispatch projects.

## Installation

First, configure npm to use GitHub Packages for @superdispatch scope packages. Create or update your `.npmrc` file:

```
@superdispatch:registry=https://npm.pkg.github.com
```

You'll also need to authenticate with GitHub Packages. Create a personal access token with `read:packages` scope and add to your `.npmrc`:

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Then install the package:

```bash
pnpm add -D @superdispatch/oxc-config oxlint
```

## Usage

Create a `.oxlintrc.json` file in your project root:

```json
{
  "extends": "@superdispatch/oxc-config/oxlintrc.json"
}
```

Or reference it directly in your package.json scripts:

```json
{
  "scripts": {
    "lint": "oxlint --config=./node_modules/@superdispatch/oxc-config/oxlintrc.json"
  }
}
```

## Publishing

This package is automatically published to GitHub Packages Registry when:

- Changes are pushed to the master branch in the `packages/oxc-config` directory
- Manual workflow dispatch is triggered with a version bump

To publish manually with a version bump:

1. Go to Actions tab in GitHub
2. Select "Publish oxc-config" workflow
3. Click "Run workflow"
4. Select the version bump type (patch, minor, or major)

## License

See the main repository license.
