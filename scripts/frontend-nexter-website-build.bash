#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🛑 Cleaning Frontend Netxer Website"
rm -rfv ../frontend/nexter-website/dist
echo "🏗️ Building Frontend Netxer Website "
export NODE_ENV=$1
npm --prefix ../frontend/nexter-website run build