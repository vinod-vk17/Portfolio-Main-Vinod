import type { VercelRequest, VercelResponse } from "@vercel/node";
import { db } from "../db";
import { experiences } from "../shared/schema";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "GET") {
      const result = await db.select().from(experiences).orderBy(experiences.id);
      return res.status(200).json(result);
    }
    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    console.error("Error in /api/experiences:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
