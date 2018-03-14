#!/bin/bash

# Beginning 
echo "";
echo "########################################"
echo "#         Node.js RESTful Start        #" 
echo "########################################"
echo ""

docker-compose down --remove-orphans
docker-compose build
docker-compose up -d mongo
docker-compose up -d swagger-ui 
docker-compose up -d mongo-express
docker-compose up nodejs 