FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . /app

EXPOSE 3000

#RUN npm run build

# Executar em homologacao/producao (heroku)
#CMD npm run start_prod
