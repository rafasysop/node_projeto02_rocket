import fastify from "fastify";
import knex from "./db/database";

const app = fastify();

app.get("/", async () => {
  const tables = await knex("sqlite_schema").select("*");

  return tables;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Servidor rodando em http://localhost:3333/");
  });
