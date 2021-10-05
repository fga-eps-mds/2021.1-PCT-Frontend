FROM node:14

COPY . /app

WORKDIR /app

RUN yarn install

CMD yarn start
