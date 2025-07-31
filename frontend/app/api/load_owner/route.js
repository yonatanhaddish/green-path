import { getAllLoadOwners } from "../../../lib/loadOwnerService";

export async function GET() {
  try {
    const driver = await getAllLoadOwners();
    return Response.json(driver);
  } catch (err) {
    console.log(`Error fetching drivers: ${err}`);
    return new Response("Error fetching drivers", {
      status: 500,
    });
  }
}
