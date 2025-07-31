import { registerLoadOwner } from "../../../lib/loadOwnerService";

export async function POST(req) {
  try {
    const { name, email, phone_number } = await req.json();

    if (!name || !email || !phone_number) {
      return new Response(
        JSON.stringify({
          error: "Name and phone number are required",
        }),
        {
          status: 400,
        }
      );
    }

    const loadOwner = await registerLoadOwner({ name, email, phone_number });
    return new Response(
      JSON.stringify({
        message: "Load owner created",
        loadOwner,
      }),
      {
        status: 201,
      }
    );
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
