#!/bin/bash

# Beginning 
echo "";
echo "########################################"
echo "#         Node.js RESTful Start        #" 
echo "########################################"
echo ""

docker-compose up --build -d mongodb nodejs mongo-express swagger-ui