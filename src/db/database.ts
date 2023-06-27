import "dotenv/config";
import { env } from "../env";
import knexSetup, { Knex } from "knex";

export const configKnex: Knex.Config = {
  client: "pg",
  connection: env.DB_STRING,
  searchPath: ["knex", "public"],
  migrations: {
    extension: "ts",
    directory: "./src/database/migrations",
  },
};

export const knex = knexSetup(configKnex);
