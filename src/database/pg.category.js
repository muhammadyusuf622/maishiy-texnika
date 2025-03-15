const { config } = require("dotenv")
const { Pool } = require("pg")

config()

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt( process.env.DB_PORT, 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_CATEGORY
});

async function queryForCategory(queryStr, params = []){
  const client = await pool.connect();
  try {
    const { rows } = await client.query(queryStr, params.length ? params : []);
    return rows
  } catch (error) {
    console.error("queryForCategory-da xatolik",error.message);
  } finally {
    client.release();
  }
}

module.exports = queryForCategory;