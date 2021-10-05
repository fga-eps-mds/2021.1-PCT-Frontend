FROM node:14

COPY . /app

WORKDIR /app

RUN yarn install

# Executar em homologacao/producao (heroku)
CMD npm run build && npm run start_prod
