import type { FastifyReply, FastifyRequest } from 'fastify'
import NodeCache from 'node-cache'
import { Item } from './item.interface.ts'
import { env } from '@src/config/env.ts'
import axios from 'axios'
import { ItemGetResponseType } from './item.schema.ts'

const cache = new NodeCache({ stdTTL: Number(env.CACHE_TTL || 0) })

export async function getItem(request: FastifyRequest, reply: FastifyReply) {
  try {
    // cache
    const cachedItems = cache.get<ItemGetResponseType>('skinportResult')

    if (cachedItems) {
      reply.send(cachedItems)
      return
    }

    // get data
    const [defaultResult, tradableResult] = await Promise.all([
      axios.get<Item[]>(env.SKINPORT_API_URL),
      axios.get<Item[]>(env.SKINPORT_API_URL, { params: { tradable: 1 } }),
    ])

    // hashmap
    const tradableItemsMap = new Map(tradableResult.data.map((item) => [item.market_hash_name, item.min_price]))

    // binding
    const response = defaultResult.data.map((defaultItem) => ({
      ...defaultItem,
      min_tradable_price: tradableItemsMap.get(defaultItem.market_hash_name) ?? null,
      min_non_tradable_price: defaultItem.min_price ?? null,
    }))

    // the end
    cache.set('skinportResult', response)

    reply.send(response)
  } catch (error: unknown) {
    reply.status(500).send({ error: (error as Error).message })
  }
}
