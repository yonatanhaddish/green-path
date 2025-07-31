import { verifyToken } from "@/jwt.mjs";
import { getAllLoadJobs } from "@/app/service/jobService";

export async function GET(req) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    if (!decoded || !decoded.id) {
      return NextResponse.json({ error: "Invalid token" }, { status: 403 });
    }

    const all_jobs = await getAllLoadJobs();
    return new Response(JSON.stringify(all_jobs), { status: 200 });
  } catch (err) {
    console.error("Get all job loads error", err);
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
