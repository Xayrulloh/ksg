import { Type } from '@sinclair/typebox'
import { Check } from '@sinclair/typebox/value'

const schema = Type.Object({
  SKINPORT_API_URL: Type.String(),
  CACHE_TTL: Type.String(),
  PORT: Type.String(),
  HOST: Type.String(),
  DB_URL: Type.String(),
})

if (!Check(schema, process.env)) {
  console.error('Some Environment variables are missing. Exiting...')
  process.exit(1)
}

export type Env = typeof schema
export const env = process.env
