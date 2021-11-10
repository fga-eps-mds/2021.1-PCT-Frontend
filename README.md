[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2021.1-PCTs-Frontend&metric=alert_status)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2021.1-PCTs-Frontend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2021.1-PCTs-Frontend&metric=coverage)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2021.1-PCTs-Frontend)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2021.1-PCTs-Frontend&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2021.1-PCTs-Frontend)

# PCTs Frontend

Repositório do frontend do projeto "Povos e Comunidades Tradicionais"

## Contribuição

1. Clone io repositório
2. Crie uma branch (`git checkout -b feat/x-branch-name`)
3. Commit suas alterações (`git commit -am "Add feat"`)
4. Push para a branch (`git push origin feat/x-branch-name`)

### Extras

- [Guia completo de contribuição completo](https://github.com/fga-eps-mds/2021.1-PCTs-Docs/blob/main/CONTRIBUTING.md)

## Como executar

### Pré requisitos

- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Iniciar a API

* Configurar variáveis de ambient (containers):
  * Copiar ou renomear arquivo "dev-env" para ".env" (ainda na pasta raiz do repositório)
  * Adicionar os hosts (ips) das apis de documentos e crawlers

* Variáveis necessárias:
```shell
REACT_APP_DOCUMENTS_API: API de documentos. # Exemplo http://localhost:8000
REACT_APP_CRAWLERS_API: API dos crawlers
```

* Construir imagens e executar containers:

```shell
docker-compose build
docker-compose up
```

### Testar Frontend no Heroku (Deploy Manual)

```shell
heroku container:login
heroku container:push web -a pcts-frontend-dev
heroku container:release web -a pcts-frontend-dev
```
