import { verifyToken } from "@/jwt.mjs";
import { unAccept } from "@/app/service/jobService";
import { updateVanOwnerIdJobAssignmentUnAccept } from "@/app/service/jobAssignmentService";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    if (!decoded?.id) {
      return NextResponse.json({ error: "Invalid token" }, { status: 403 });
    }

    const job_id = await req.json();
    const van_driver_id = decoded.id;
    const data = { ...job_id, van_driver_id };

    const updatedJob = await unAccept(data);

    if (!updatedJob) {
      return NextResponse.json(
        { error: "Unauthorized to un-accept" },
        { status: 400 }
      );
    }

    await updateVanOwnerIdJobAssignmentUnAccept(updatedJob.id);

    return new Response(JSON.stringify(updatedJob), { status: 200 });
  } catch (err) {
    console.error("UnAccept Job Error", err);
    return new Response(
      JSON.stringify({
        error: "Server error",
      }),
      { status: 500 }
    );
  }
}
