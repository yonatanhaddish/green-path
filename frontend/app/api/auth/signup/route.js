import { pool } from "../../../../lib/db.js";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const {
      first_name,
      last_name,
      email,
      password_hash,
      phone_number,
      home_address,
      apartment_number,
      country,
      city,
      postal_code,
    } = await req.json();

    if (
      !first_name ||
      !last_name ||
      !email ||
      !password_hash ||
      !phone_number ||
      !home_address ||
      !apartment_number ||
      !country ||
      !city ||
      !postal_code
    ) {
      return new Response(
        JSON.stringify({
          error: "All fields are required",
        }),
        { status: 400 }
      );
    }

    const userExist = await pool.query(
      `SELECT id FROM van_driver WHERE email = $1`,
      [email]
    );
    if (userExist.rows.length > 0) {
      return new Response(
        JSON.stringify({
          error: "Email already in use",
        }),
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password_hash, 10);
    await pool.query(
      `INSERT INTO van_driver (first_name, last_name, email, password_hash, phone_number, home_address, apartment_number, country, city, postal_code) 
        VALUES
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      `,
      [
        first_name,
        last_name,
        email,
        hashedPassword,
        phone_number,
        home_address,
        apartment_number,
        country,
        city,
        postal_code,
      ]
    );
    return new Response(
      JSON.stringify({
        message: "User registered successfully",
      }),
      {
        status: 201,
      }
    );
  } catch (err) {
    console.error("Signup error:", err);
    return new Response(
      JSON.stringify({
        error: "Server error",
      }),
      {
        status: 500,
      }
    );
  }
}
