import knexSetup from "knex";

export const configKnex = {
  client: "better-sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./tmp/mydb.db",
  },
};

const knex = knexSetup(configKnex);

export default knex;
