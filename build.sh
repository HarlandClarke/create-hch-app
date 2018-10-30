#!/usr/bin/bash

./node_modules/.bin/babel ./src/ --source-maps-inline --copy-files -d ./dist
rm -rf src/