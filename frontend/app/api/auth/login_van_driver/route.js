import { pool } from "../../../../lib/db";
import bcrypt from "bcrypt";
import { generateToken } from "../../../../jwt.mjs";

export async function POST(req) {
  try {
    const { email, password_hash } = await req.json();

    console.log({ email, password_hash });

    if (!email || !password_hash) {
      return new Response(
        JSON.stringify({
          error: "Email and password required",
        }),
        {
          status: 400,
        }
      );
    }

    const result = await pool.query(
      `SELECT * FROM van_driver WHERE email = $1`,
      [email]
    );
    if (result.rows.length === 0) {
      return new Response(
        JSON.stringify({
          error: "Invalid email or password",
        }),
        { status: 401 }
      );
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password_hash, user.password_hash);

    if (!isMatch) {
      return new Response(
        JSON.stringify({
          error: "Invalid email or password",
        }),
        {
          status: 401,
        }
      );
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
    });

    return new Response(
      JSON.stringify({
        message: "Login successful",
        token,
        user: { id: user.id, name: user.first_name, email: user.email },
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Login error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
