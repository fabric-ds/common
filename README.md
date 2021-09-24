# Fabric Common

This repo is an npm 7 workspaces based monorepo containing common utility packages for use throughout the Fabric project.

## Development

**Important!** Make sure you are running node 16 with npm 7

After cloning the repo, run the following command from the project root to develop

```
npm run dev
```

## Adding new components

1. Ensure you are running >= Node v16 NPM v7
1. Run `npm init -w ./packages/<package name>` and fill in the questions

## Publishing components

1. Ensure you are in the root of the project
1. Run `npm version -w packages/<package name>` to version a package.
1. Run `npm publish -ws` to publish all packages. Run `npm publish -w packages/<package name>` to publish a single package.

## Publishing to Eik

In the root of the project, first ensure you are authenticated with the Eik server

```
npm run eik:login
```

Next, run publish

```
npm run eik:publish
```

Done. The aliasing part ensures that all docs sites get the changes.