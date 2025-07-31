import { pool } from "../../lib/db.js";

export async function getAllDrivers() {
  const result = await pool.query(`SELECT * FROM van_driver`);
  return result.rows;
}

export async function getDriverById(data) {
  const result = await pool.query(`SELECT * FROM van_driver WHERE id = $1`, [
    data,
  ]);
  return result.rows[0];
}
