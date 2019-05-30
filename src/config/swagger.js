exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Fastify API',
      description: 'Rest API with NodeJS, MongoDB, Fastify, Swagger',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find out more'
    },
    host: 'localhost',
    scheme: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}
