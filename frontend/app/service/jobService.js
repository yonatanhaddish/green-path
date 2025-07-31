import { pool } from "@/lib/db";

export async function registerLoadJob(data) {
  const {
    load_owner_id,
    pickup_address,
    dropoff_address,
    pickup_date,
    item_name,
    description,
    weight,
    status,
    accepted_by_id,
  } = data;

  const result = await pool.query(
    `INSERT INTO job ( load_owner_id, pickup_address, dropoff_address, pickup_date, item_name, description,
        weight, status, accepted_by_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
    [
      load_owner_id,
      pickup_address,
      dropoff_address,
      pickup_date,
      item_name,
      description,
      weight,
      status,
      accepted_by_id,
    ]
  );
  return result.rows[0];
}

export async function getAllLoadJobs() {
  const result = await pool.query(`SELECT * FROM job`);
  return result.rows;
}
