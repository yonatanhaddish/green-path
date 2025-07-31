import { pool } from "../../../lib/db.js";
import { verifyToken } from "../../../jwt.mjs";
import { NextResponse } from "next/server";
import { registerVan } from "@/app/service/vanService.js";

export async function POST(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    if (!decoded || !decoded.id) {
      return new Response(
        JSON.stringify({
          error: "Invalid token",
        }),
        {
          status: 403,
        }
      );
    }
    console.log("555555", decoded);

    const van_driver_id = decoded.id;
    const body = await req.json();
    const data = { ...body, van_driver_id };

    const driver = await registerVan(data);

    return new Response(JSON.stringify(driver), { status: 200 });
  } catch (err) {
    console.error("Register Van Route Error", err);
    return new Response(
      JSON.stringify({
        error: "Server error",
      }),
      { status: 500 }
    );
  }
}
