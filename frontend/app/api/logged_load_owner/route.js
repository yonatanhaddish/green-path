import { verifyToken } from "@/jwt.mjs";
import { getLoadOwnerbyId } from "@/app/service/loadOwnerService";

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

    console.log("888", decoded.id);

    if (!decoded) {
      return new Response(
        JSON.stringify({
          error: "invalid token",
        }),
        { status: 403 }
      );
    }

    const loadOwner = await getLoadOwnerbyId(decoded.id);

    if (!loadOwner) {
      return new Response(
        JSON.stringify({
          error: "User not found",
        }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(loadOwner), { status: 200 });
  } catch (err) {
    console.error("Select Driver Route Error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
