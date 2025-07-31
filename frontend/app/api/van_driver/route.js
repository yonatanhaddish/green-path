import { getAllDrivers } from "../../service/vanDriverService";

export async function GET() {
  try {
    const drivers = await getAllDrivers();
    return Response.json(drivers);
  } catch (err) {
    console.log(`Error fetching drivers: ${err}`);
    return new Response("Error fetching drivers", { status: 500 });
  }
}
