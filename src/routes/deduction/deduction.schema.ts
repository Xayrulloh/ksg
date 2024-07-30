import { Type } from '@sinclair/typebox'

export const DeductionParam = Type.Object({
  id: Type.Number(),
})

export const DeductionBody = Type.Object({
  amount: Type.Number(),
})

export const DeductionSchema = {
  body: DeductionBody,
  params: DeductionParam,
  response: {
    200: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        balance: { type: 'number' },
      },
    },
    500: {
      type: 'object',
      properties: {
        error: { type: 'string' },
      },
    },
  },
  tags: ['deduction'],
}

export type DeductionSchemaType = typeof DeductionSchema
export type DeductionBodyType = typeof DeductionBody
export type DeductionParamType = typeof DeductionParam
