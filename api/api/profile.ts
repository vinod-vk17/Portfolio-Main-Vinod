import type { VercelRequest, VercelResponse } from "@vercel/node";
import { db } from "../db";
import { profile } from "../shared/schema";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "GET") {
      const [result] = await db.select().from(profile).limit(1);
      if (!result) {
        return res.status(404).json({ message: "Profile not found" });
      }
      return res.status(200).json(result);
    }
    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    console.error("Error in /api/profile:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
