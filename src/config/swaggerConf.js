export const swaggerConf = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation DesApp',
            version: '0.1.0',
            description: 'API Documentation Desarrollo de Aplicaciones - UNQ',
            contact: {
                name: 'Joaquin (Pato) Decima',
                email: 'jdecima@vasak.net.ar',
                url: 'https://joaquindecima.ml/'
            },
        }
    },
    basePath: '/docs',
    apis: [
        'src/router/*Router.js',
    ],
};