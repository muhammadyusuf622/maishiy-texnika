const { config } = require("dotenv");
const { Pool } = require("pg");

config()

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

async function query(quaryStr, params = []){
  const client = await pool.connect()
  try {
    const { rows } = await client.query(quaryStr, params.length ? params : null);
    return rows
  } catch (error) {
    console.error(`Database error: ${error.message}`)
  } finally {
    client.release();
  }
}

module.exports = query;