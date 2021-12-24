# leads2b-test

## About

Projeto feito para o teste de front-end da Leads2b.

### `Techs`:

- State Management: `Vuex` to control global state
- Styling: `Sass` and `Vuetify`
- API: `Marvel API`
- Docker: `Docker`

## Build setup

```bash
# execute the steps from Dockerfile
$ docker build -t leads2b-test .

# run the container
$ docker run leads2b-test

# run the container (ubuntu)
$ sudo docker run leads2b-test
```
## Feito

- Index page: trazer todos os personagens da API;
- Character page: trazer informações relevantes além de links externos;

## Fazer (devido ao tempo e minha viagem)

- Pagination component: para controle de página atual e items por página;
- Favorite hero feature: mock de backend para favoritar personagens em uma
rota autenticada;
