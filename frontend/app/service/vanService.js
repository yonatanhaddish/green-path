import { pool } from "@/lib/db";

export async function getAllVans() {
  const result = await pool.query(`SELECT * FROM van`);
  return result.rows;
}

export async function registerVan(data) {
  const {
    van_driver_id,
    make,
    model,
    year,
    license_plate,
    capacity_kg,
    vehicle_inspection,
    insurance_valid_until,
  } = data;

  console.log("2222", data);

  const result = await pool.query(
    `INSERT INTO van (van_driver_id, make, model, year, license_plate, capacity_kg, vehicle_inspection, insurance_valid_until)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    [
      van_driver_id,
      make,
      model,
      year,
      license_plate,
      capacity_kg,
      vehicle_inspection,
      insurance_valid_until,
    ]
  );
  return result.rows[0];
}
