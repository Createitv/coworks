import { getKnowledgeIndex } from "@/lib/resource-catalog";

export const dynamic = "force-static";

export function GET() {
  return Response.json(getKnowledgeIndex(), { headers: { "X-Robots-Tag": "noindex" } });
}
