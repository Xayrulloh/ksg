import type { FastifyInstance } from 'fastify'
import itemRoutes from './item/item.route.ts'
import deductionRoutes from './deduction/deduction.route.ts'

const routes = async (fastify: FastifyInstance) => {
  await fastify.register(itemRoutes, { prefix: 'item' })
  await fastify.register(deductionRoutes, { prefix: 'deduction' })
}

export default routes
