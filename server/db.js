import pkg from "pg";
const { Pool } = pkg;

const db = new Pool({
  host: "localhost",
  user: "postgres",
  password: process.env.PSQL_PW,
  port: 5432,
  database: "JobHunterApp",
});

export default db;
