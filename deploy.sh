#!/usr/bin/env sh

# abort on errors
set -e

# clean up previous
rm -rf dist

# build website
bun run build

# add CNAME file
echo 'chora.studio' >> dist/CNAME

# change to build directory
cd dist

# git init and commit
git init
git add -A
git commit -m 'publish'

# push to gh-pages branch
git push https://github.com/chora-studio/www master:gh-pages -f

cd -
