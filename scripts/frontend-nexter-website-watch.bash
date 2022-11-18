#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "👀  Watching Frontend Nexter Website"
export NODE_ENV="watch"
npm --prefix ../frontend/nexter-website run watch
