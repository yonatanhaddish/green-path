import { verifyToken } from "@/jwt.mjs";
import { NextResponse } from "next/server";
import { deleteJobLoad } from "@/app/service/jobService";

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
    const load_owner_id = decoded.id;
    const data = { ...job_id, load_owner_id };

    const deletedJob = await deleteJobLoad(data);

    if (!deletedJob) {
      return NextResponse.json(
        { error: "Job not found or unauthorized" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, deletedJob });
  } catch (err) {
    console.error("Delete Job Error", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
