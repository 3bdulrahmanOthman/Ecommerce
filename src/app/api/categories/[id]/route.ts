import { NextRequest } from "next/server";
import { categories } from "../../utils/mockData";
import { errorResponse, successResponse } from "../../utils/response";

/**
 * GET /api/categories/:id
 * Fetch category by ID.
 */
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const category = categories.find((c) => c.id === params.id);
  return category ? successResponse(category) : errorResponse("Category not found", 404);
}
