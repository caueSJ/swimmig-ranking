import postgres from "postgres";

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID, PGPORT } = process.env; // Bun.env is an alias for process.env

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: PGPORT, // Neon.tech default port
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

export default sql;