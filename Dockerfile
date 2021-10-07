FROM node:14

COPY . /app
WORKDIR /app

RUN yarn install
RUN yarn run build

EXPOSE 3000

# Executar em homologacao/producao (heroku)
CMD yarn run start_prod
