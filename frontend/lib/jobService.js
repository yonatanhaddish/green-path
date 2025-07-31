import { pool } from "./db";

export async function registerJob(data) {
  // const {
  //   load_owner_id,
  //   pickup_address,
  //   dropoff_address,
  //   pickup_date,
  //   item_name,
  //   description,
  //   weight,
  //   price,
  //   status,
  //   accepted_by_id,
  // } = data;

  const result = await pool.query(`select * from job`);
  return result.rows;
}
