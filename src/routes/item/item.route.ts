import type { FastifyPluginAsync } from 'fastify'
import { getItem } from './item.handler.ts'
import { ItemGetSchema } from './item.schema.ts'

const itemRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.get(
    '/',
    {
      schema: ItemGetSchema,
    },
    getItem,
  )
}

export default itemRoutes
