import type { FastifyPluginAsync } from 'fastify'
import { deduction } from './deduction.handler.ts'
import { DeductionSchema } from './deduction.schema.ts'

const deductionRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.post(
    '/:id',
    {
      schema: DeductionSchema,
    },
    deduction,
  )
}

export default deductionRoutes
