import knexSetup, { Knex } from "knex";

export const configKnex: Knex.Config = {
  client: "better-sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./src/database/app.db",
  },
  migrations: {
    extension: "ts",
    directory: "./src/database/migrations",
  },
};

const knex = knexSetup(configKnex);

export default knex;
