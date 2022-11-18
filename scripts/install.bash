#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🛑  Cleaning ALL Nexter node_modules"
rm -rfv ../frontend/living-style-guide/node_modules
rm -rfv ../assets/node_modules
rm -rfv ../frontend/nexter-website/node_modules

echo "🔧  Installing ALL Nexter"
npm --prefix ../frontend/living-style-guide install
npm --prefix ../assets install
npm --prefix ../frontend/nexter-website install
