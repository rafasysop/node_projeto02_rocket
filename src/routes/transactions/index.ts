import { randomUUID } from "crypto";
import { knex } from "db/database";
import { FastifyInstance } from "fastify";

export const transactiosnRoutes = async (app: FastifyInstance) => {
  app.get("/", async () => {
    // return await knex("transactions")
    //   .insert({
    //     id: randomUUID(),
    //     title: "cartao",
    //     amount: -720,
    //   })
    //   .returning("*");

    const tables = await knex("transactions").select("*");

    return tables;
  });
};
