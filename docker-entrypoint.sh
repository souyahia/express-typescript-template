#!bin/bash
if [ "${NODE_ENV}" = "development" ]
then
  NPM_SCRIPT="start:watch"
elif [ "${NODE_ENV}" = "test" ]
then
  if [ "${coverage}" = "true" ]
  then
    NPM_SCRIPT="test:coverage"
  else
    NPM_SCRIPT="test"
  fi
else
  NPM_SCRIPT="start"
fi

cd /home/node/app
npm run "${NPM_SCRIPT}"