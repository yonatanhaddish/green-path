import { pool } from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { email, password_hash, phone_number, company_name } =
      await req.json();

    if (!email || !password_hash || !phone_number || !company_name) {
      return new Response(
        JSON.stringify({
          error: "All fields are required",
        }),
        {
          status: 400,
        }
      );
    }

    const userExist = await pool.query(
      `SELECT id FROM load_owner WHERE email = $1`,
      [email]
    );

    if (userExist.rows.length > 0) {
      return new Response(
        {
          error: "Email already in use",
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password_hash, 10);
    await pool.query(
      `INSERT INTO load_owner (email, password_hash, phone_number, company_name) 
        VALUES
                ($1, $2, $3, $4)
      `,
      [email, hashedPassword, phone_number, company_name]
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
