FROM node:10-alpine

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY package*.json ./
COPY .npmrc .npmrc

RUN apk add --no-cache --virtual .gyp python make g++ \
  && npm install \
  && apk del .gyp

COPY . .

RUN chmod +x /home/node/app/docker-entrypoint.sh

ENV Server__Port 80

EXPOSE ${Server__Port}

ENTRYPOINT ["sh", "/home/node/app/docker-entrypoint.sh"]