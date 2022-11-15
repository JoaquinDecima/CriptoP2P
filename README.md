# DesApp Backend

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=JoaquinDecima_backend-desapp-api&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=JoaquinDecima_backend-desapp-api)
[![GitHub issues](https://img.shields.io/github/issues/JoaquinDecima/backend-desapp-api?style=for-the-badge)](https://github.com/JoaquinDecima/backend-desapp-api/issues)
[![GitHub license](https://img.shields.io/github/license/JoaquinDecima/backend-desapp-api?style=for-the-badge)](https://github.com/JoaquinDecima/backend-desapp-api)

Proyecto para la materia Desarrollo de Aplicaciones de la UNQ.

## Descripción

Este proyecto es una API REST que permite la gestión de usuarios, y transacciones.

* Backend: 
    * NodeJS
    * Express _express_
    * JWT _jesonwebtoken_
    * Bcrypt _bcrypt_
    * Swagger _swagger-jsdoc_ _swagger-ui-express_
    * Mocha _mocha_ _chai_
    * MongoDB _mongoose_
    * Cache (Utiliza ram para evitar servidor redis) _apicache_
    * Axios _axios_
    * Dotenv _dotenv_
    * Schedule _node-schedule_ (para Binance)
* Servicios: 
    * Restful
    * Swagger
* Infra: 
    * Github
    * Github Actions
    * Heroku

## Instalación

### Requisitos

* NodeJS
* MongoDB

### Instalación

1. Clonar el repositorio

```bash
git clone git@github.com:JoaquinDecima/backend-desapp-api.git
```

2. Instalar dependencias

```bash
npm install
```

3. Crear archivo .env

```bash
cp .env.example .env
```

4. Correr el proyecto

```bash
npm run dev
```

## Documentación

La documentación de la API se encuentra en la ruta `/docs`

## Tests

Para correr los tests

```bash
npm run test
```


## Autor

* **Joaquín (Pato) Decima** - *Desarrollador* - [JoaquinDecima]

[JoaquinDecima]: https://joaquindecima.ml/

