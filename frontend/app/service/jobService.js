import { pool } from "@/lib/db";

// to post a load job
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
        weight, accepted_by_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    [
      load_owner_id,
      pickup_address,
      dropoff_address,
      pickup_date,
      item_name,
      description,
      weight,
      accepted_by_id,
    ]
  );
  return result.rows[0];
}

// get all load jobs
export async function getAllLoadJobs() {
  const result = await pool.query(`SELECT * FROM job`);
  return result.rows;
}

// a van_driver accepting a job
export async function acceptJob(data) {
  const { jobId, driver_id } = data;

  const result = await pool.query(
    `UPDATE job
      SET status = 'accepted', accepted_by_id = $1
      WHERE id = $2 AND accepted_by_id IS NULL
      RETURNING *`,
    [driver_id, jobId]
  );
  return result.rows[0];
}

export async function unAccept(data) {
  const { job_id } = data;
  const result = await pool.query(
    `UPDATE job
      SET status = 'pending', accepted_by_id = NULL
      WHERE id = $1 AND accepted_by_id IS NOT NULL
      RETURNING *`,
    [job_id]
  );

  return result.rows[0];
}
