import { verifyToken } from "@/jwt.mjs";
import { getDriverById } from "@/app/service/vanDriverService";

export async function GET(req) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({
          error: "Unauthorized",
        }),
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    if (!decoded) {
      return new Response(
        JSON.stringify({
          error: "invalid token",
        }),
        { status: 403 }
      );
    }

    const driver = await getDriverById(decoded.id);

    if (!driver) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(driver), { status: 200 });
  } catch (err) {
    console.error("Select Driver Route Error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
