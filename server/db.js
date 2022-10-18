import pkg from "pg";
const { Pool } = pkg;

const db = new Pool({
  host: "localhost",
  user: "postgres",
  password: "abcd1234",
  port: 5432,
  database: "JobHunterApp",
});

export default db;
