import { Type } from '@sinclair/typebox'

export const ItemGetResponse = Type.Object({
  market_hash_name: Type.String(),
  currency: Type.String(),
  suggested_price: Type.Number(),
  item_page: Type.String(),
  market_page: Type.String(),
  min_price: Type.Number(),
  max_price: Type.Number(),
  mean_price: Type.Number(),
  median_price: Type.Number(),
  quantity: Type.Number(),
  created_at: Type.String(),
  updated_at: Type.String(),
  min_tradable_price: Type.Union([Type.Null(), Type.Number()]),
  min_non_tradable_price: Type.Union([Type.Null(), Type.Number()]),
})

export const ItemGetSchema = {
  response: {
    200: {
      type: 'array',
      items: ItemGetResponse,
    },
  },
  tags: ['item'],
}

export type ItemGetResponseType = typeof ItemGetResponse
