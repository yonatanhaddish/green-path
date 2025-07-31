import { verifyToken } from "@/jwt.mjs";
import { NextResponse } from "next/server";
import { registerLoadJob } from "@/app/service/jobService";

export async function POST(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
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

    const load_owner_id = decoded.id;
    const body = await req.json();
    const data = { ...body, load_owner_id };

    const load_owner = await registerLoadJob(data);
    return new Response(JSON.stringify(load_owner), { status: 200 });
  } catch (err) {
    console.error("Error creating load owner:", err);
    return new Response(
      JSON.stringify({
        error: "Server error",
      }),
      { status: 500 }
    );
  }
}
