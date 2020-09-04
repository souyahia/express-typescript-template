#!bin/bash
if [ "${NODE_ENV}" = "development" ]
then
  NPM_SCRIPT="start:watch"
elif [ "${NODE_ENV}" = "test" ]
then
  NPM_SCRIPT="test"
else
  NPM_SCRIPT="start"
fi

cd /home/node/app
npm run "${NPM_SCRIPT}"