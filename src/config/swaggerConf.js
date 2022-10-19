export const swaggerConf = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'DesApp Backend',
            version: '0.1.0',
            description: 'API Documentation Desarrollo de Aplicaciones - DesApp Backend - UNQ 2022 s2 - Grupo H',
            contact: {
                name: 'Joaquin (Pato) Decima',
                url: 'https://joaquindecima.ml/'
            }
        }
    },
    basePath: '/docs',
    host: 'https://desapp-backend.herokuapp.com',
    apis: [
        'src/router/*Router.js',
    ],
};