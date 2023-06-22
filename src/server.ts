import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return "Hello World 2";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Servidor rodando em http://localhost:3333/");
  });
