import { verifyToken } from "@/jwt.mjs";
import { acceptJob } from "@/app/service/jobService";
import { updateVanOwnerIdJobAssignment } from "@/app/service/jobAssignmentService";
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

    const driver_id = decoded.id;
    const job_id = await req.json();
    const data = { ...job_id, driver_id };

    const updatedJob = await acceptJob(data);

    if (!updatedJob) {
      return NextResponse.json(
        { error: "Unauthorized to accept" },
        { status: 400 }
      );
    }

    await updateVanOwnerIdJobAssignment(
      updatedJob.id,
      updatedJob.accepted_by_id,
      new Date()
    );
    return new Response(JSON.stringify(updatedJob), { status: 200 });
  } catch (err) {
    console.error("Accepted Job Error", err);
    return new Response(
      JSON.stringify({
        error: "Server error",
      }),
      { status: 500 }
    );
  }
}
