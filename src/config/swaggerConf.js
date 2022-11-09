export const swaggerConf = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'DesApp Backend',
            version: '0.1.0',
            description: 'API Documentation Desarrollo de Aplicaciones - DesApp Backend - UNQ 2022 s2 - Grupo E',
            license: {
                name: 'gpl-3.0',
                url: 'https://www.gnu.org/licenses/gpl-3.0.html',
            },
            contact: {
                name: 'Joaquin (Pato) Decima',
                url: 'https://joaquindecima.ml/'
            }
        }
    },
    basePath: '/docs',
    servers: [
        {
            "url": "http://localhost:8080/",
            "description": "Development server"
        },
        {
            "url": "https://backend-desapp.herokuapp.com/",
            "description": "Production server"
        }
    ],
    apis: [
        'src/router/*Router.js',
    ]
};

export const swaggerConfStyle = {
    explorer: true,
    customfavIcon: 'https://joaquindecima.ml/favicon.ico',
    customSiteTitle: "DesApp Backend - Swagger",
    customCss: `
        .swagger-ui .topbar { 
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 0 0 10px 10px;
        }

        .swagger-ui .topbar .download-url-wrapper .download-url-button {
            border-radius: 0 10px 10px 0;
        }

        .swagger-ui .topbar .download-url-wrapper input[type=text] {
            border-radius: 10px 0 0 10px;
        }

        .swagger-ui .opblock, .swagger-ui .opblock .opblock-summary-method, .swagger-ui .copy-to-clipboard, .swagger-ui .btn ,.swagger-ui input[type=email], .swagger-ui input[type=file], .swagger-ui input[type=password], .swagger-ui input[type=search], .swagger-ui input[type=text], .swagger-ui textarea {
            border-radius: 10px;
        }

        .swagger-ui .info .title, .swagger-ui .info .renderedMarkdown p {
            display: flex;
            align-content: center;
            justify-content: center;
        }
    `,
};