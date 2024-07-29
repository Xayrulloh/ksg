import { client } from "@src/config/db.ts";
import { FastifyReply, FastifyRequest } from "fastify";
import { DeductionBodyType, DeductionParamType } from "./deduction.schema.ts";

export async function deduction(request: FastifyRequest<{ Params: DeductionParamType; Body: DeductionBodyType }>, reply: FastifyReply) {
  try {

    const userId = Number(request.params.id);
    const { amount } = request.body;

    const user = await client.query('SELECT balance FROM users WHERE id = $1', [userId]);

    if (user.rows.length === 0) {
      throw new Error('User not found');
    }

    const balance = user.rows[0].balance;
    if (balance < amount) {
        throw new Error('Insufficient balance');
    }

    await client.query('UPDATE users SET balance = balance - $1 WHERE id = $2', [amount, userId]);

    reply.send({ success: true, balance: balance - amount });

  } catch (error: unknown) {
    reply.status(500).send({ error: (error as Error).message });
  }
}
