import { env } from "@config/env.ts";
import pg from "pg";

const client = new pg.Client(env.DB_URL);

await client.connect();

export async function initDatabase() {
  try {

    await client.query(`
      CREATE TABLE IF NOT EXISTS public.users (
        id SERIAL PRIMARY KEY,
        balance NUMERIC NOT NULL
      )`)

    await client.query(`INSERT INTO users (id, balance) VALUES (1, 1000) ON CONFLICT DO NOTHING`);

  } catch (err) {
    console.error('Error initializing database:', err);
  }
}
export { client }
