#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🏗️  BUILD Nexter Website content"
bash frontend-nexter-website-build.bash development

echo "🟢  START 🐳  Docker Nginx server conatiner "
docker-compose --env-file ../config.env \
  --file ../docker/docker-compose.traefik-proxy.yml \
  --file ../docker/docker-compose.nexter-website.yml \
  up --detach --build