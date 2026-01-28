import type { VercelRequest, VercelResponse } from "@vercel/node";
import { db } from "../db";
import { projects } from "../shared/schema";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === "GET") {
      const results = await db.select().from(projects);
      return res.status(200).json(results);
    }
    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    console.error("Error in /api/projects:", error);
    return res.status(500).json({ 
      message: "Internal server error",
      ...(process.env.NODE_ENV === 'development' && { error: String(error) })
    });
  }
}
