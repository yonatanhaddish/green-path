import { pool } from "@/lib/db";

export async function createJobAssignment(job_id, load_owner_id) {
  const result = await pool.query(
    `INSERT INTO job_assignment (job_id, load_owner_id) VALUES ($1, $2) RETURNING *`,
    [job_id, load_owner_id]
  );
  return result.rows[0];
}

export async function updateVanOwnerIdJobAssignment(
  job_id,
  van_driver_id,
  assigned_at
) {
  console.log("5555555", {
    job_id,
    van_driver_id,
  });

  const result = await pool.query(
    `UPDATE job_assignment
       SET status = 'Accepted', van_driver_id = $1, assigned_at = $3
       WHERE job_id = $2
       RETURNING *`,
    [van_driver_id, job_id, assigned_at]
  );
  return result.rows[0];
}
