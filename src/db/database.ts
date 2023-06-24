import knexSetup from "knex";

const knex = knexSetup({
  client: "better-sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./tmp/mydb.db",
  },
});

export default knex;
