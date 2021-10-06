FROM node:14

COPY . /app

WORKDIR /app

RUN yarn install
RUN npm run build

# Executar em homologacao/producao (heroku)
CMD npm run start_prod
