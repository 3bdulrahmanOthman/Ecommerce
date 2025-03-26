import { subcategories } from "../utils/mockData";
import { successResponse } from "../utils/response";

/**
 * GET /api/subcategories
 * Fetch all subcategories.
 */
export async function GET() {
  return successResponse(subcategories, "Subcategories retrieved successfully");
}
