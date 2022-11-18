#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "📦  Package Frontend Nginx"
mkdir -p ../package/nexter-website
cp -rfv ../frontend/nexter-website/dist/* ../package/nexter-website