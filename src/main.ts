import Fastify from 'fastify'
import { loggerConfig } from '@config/logging.ts'
import { env } from '@config/env.ts'
import { initDatabase } from '@config/db.ts'
import routes from '@routes/index.ts'
import { registerSwagger } from '@config/swagger.ts'

// Initialize Fastify instance
const fastify = Fastify({
  logger: loggerConfig,
})

// Initialize the database
await initDatabase()

// Initialize Swagger
registerSwagger(fastify)

// Register routes
fastify.register(routes)

// Run the SERVER!
try {
  await fastify.listen({ port: +env.PORT })
} catch (err) {
  console.error(err)
  process.exit(1)
}
