// import { createJobAssignment } from "@/app/service/jobAssignmentService";
// import { NextResponse } from "next/server";

// export async function POST(req) {

//     try {
//            const authHeader = req.headers.get("authorization");
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//         const token = authHeader.split(" ")[1];
//         const decoded = verifyToken(token);

//         if (!decoded?.id) {
//           return NextResponse.json({ error: "Invalid token" }, { status: 403 });
//         }

//         const load_owner_id = decoded.id;
//         const job_id =
//     }
//     catch (err) {
//     console.error("Create Job Assignment Error", err);
//     return new Response(JSON.stringify({ error: "Server error" }), {
//       status: 500,
//     });
//   }
// }
