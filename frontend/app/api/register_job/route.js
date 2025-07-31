import { registerJob } from "../../../lib/jobService";

export async function GET(req) {
  try {
    const drivers = await registerJob();
    return Response.json(drivers);
  } catch (err) {
    console.log(`Error fetching drivers: ${err}`);
    return new Response("Error fetching drivers", { status: 500 });
  }
}
