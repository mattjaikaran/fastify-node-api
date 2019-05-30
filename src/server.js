const fastify = require('fastify')({ logger: true })
const mongoose = require('mongoose')
const routes = require('./routes')
const swagger = require('./config/swagger')

fastify.register(require('fastify-swagger'), swagger.options)

const db = process.env.mongoURI
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

routes.forEach((route) => {
  fastify.route(route)
})

fastify.get('/', async (req, res) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`server listening on port ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
