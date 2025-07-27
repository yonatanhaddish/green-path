import { pool } from "./db.js";

// get all drivers
export async function getAllDrivers() {
  const result = await pool.query(`SELECT * FROM van_driver`);
  return result.rows;
}

export async function getDriverByName(name) {
  const result = await pool.query(
    "SELECT * FROM van_driver WHERE first_name = $1",
    ["Charlie"]
  );
  return result.rows;
}
