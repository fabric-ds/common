#!/bin/bash

rm -rf dist;

mkdir -p dist/footer;
mkdir -p dist/asset-links;
mkdir -p dist/navigation;
mkdir -p dist/sidebar;
mkdir -p dist/template;

cp packages/navigation/index.js dist/navigation/index.js;
cp packages/asset-links/index.js dist/asset-links/index.js;
cp packages/sidebar/index.js dist/sidebar/index.js;
cp packages/template/index.js dist/template/index.js;
cp packages/footer/index.js dist/footer/index.js;