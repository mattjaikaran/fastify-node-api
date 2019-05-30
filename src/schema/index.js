const fastify = require('./server.js')
import gql = require('fastify-gql')
const schema = require('schema')

fastify.register(gql, {
  schema,
  graphiql: true
})

const routes = require('./routes')
