import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
const docs = require('../docs');

export const configSwagger = (app: any) => {
    //app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));

    const optionsSwagger = {
        definition: {
          swagger: "2.0",
          info: {
            title: "Node Restaurant Express API with Swagger",
            version: "0.1.0",
            description: "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
              name: "MIT",
              url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
              name: "Stefanos Kotsias",
              url: "https://kotsias.info",
              email: "kotsias.stefanos@gmail.com",
            },
          },
          servers: [
            {
              url: "http://localhost:4000",
            },
          ],
        },
        apis: [
            './src/app/cart/routes.ts'
        ]
    };

    const optionsOpenApi = {
        definition: {
          openapi: "3.0.3",
          info: {
            title: "REST API for Swagger Documentation",
            version: "1.0.0",
          },
          schemes: ["http"],
          servers: [{ url: "http://localhost:4000/" }],
        },
        explorer: true,
        apis: ["./src/**/*.ts"],
      };

    const specs = swaggerJsdoc(optionsOpenApi);

    app.use(
        '/api-docs', 
        swaggerUi.serve, 
        //swaggerUi.setup(specs)
        swaggerUi.setup(docs)
    );
};
