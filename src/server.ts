import { env } from "env";
import fastify from "fastify";
import { transactiosnRoutes } from "routes/transactions";

const app = fastify();

app.register(transactiosnRoutes);

app
  .listen({
    port: env.PORT ? Number(env.PORT) : 3332,
  })
  .then(() => {
    console.log(
      `${env.NODE_ENV.toUpperCase()}:`,
      `Server is running at ${
        env.PORT ? `http://localhost:${env.PORT}/` : "http://localhost:3332/"
      }`
    );
  });
