# Fabric Common

This repo is an npm 7 workspaces based monorepo containing common utility packages for use throughout the Fabric project.

## Development

**Important!** Make sure you are running node 16 with npm 7

After cloning the repo, run the following command to install dependencies in all workspaces:

```
npm install --workspaces
```

Then go into the package you wish to work on and run:

```
npm run dev
```

## Adding new components

1. Ensure you are running >= Node v16 NPM v7
1. Run `npm init -w ./packages/<package name>` and fill in the questions