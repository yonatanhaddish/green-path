import { pool } from "./db.js";
import { idSetter } from "./setter.js";

export async function getAllLoadOwners() {
  const result = await pool.query(`SELECT * FROM load_owner`);
  return result.rows;
}

export async function registerLoadOwner(data) {
  const { name, email, phone_number } = data;
  const result = await pool.query(
    `INSERT INTO load_owner (name, email, phone_number, created_at) VALUES ($1, $2, $3, NOW())
            RETURNING *
        `,
    [name, email || null, phone_number]
  );

  return idSetter(result.rows[0]);
}
