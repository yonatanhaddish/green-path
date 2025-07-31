import { pool } from "@/lib/db";

export async function getLoadOwnerbyId(data) {
  const result = await pool.query(`SELECT * FROM load_owner WHERE id = $1`, [
    data,
  ]);
  return result.rows[0];
}
