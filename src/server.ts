import fastify from "fastify";
import knex from "./db/database";
import { randomUUID } from "crypto";

const app = fastify();

app.get("/", async () => {
  // await knex("transactions").insert({ id: randomUUID(), title: "Mais um" });
  const tables = await knex("transactions").select("*");

  return tables;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Servidor rodando em http://localhost:3333/");
  });
