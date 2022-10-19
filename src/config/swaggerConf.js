export const swaggerConf = {
    swaggerDefinition: {
        info: {
            title: 'API Documentation DesApp',
            version: '1.0.0',
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
        '../router/*.js',
    ],
};