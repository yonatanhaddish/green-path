import { getAllVans } from "@/app/service/vanService";

export async function GET() {
  try {
    const driver = await getAllVans();

    return Response.json(driver);
  } catch (err) {
    console.error("Error fetching driver: ", err);
    return new Response("Error fetching driver", { status: 500 });
  }
}
