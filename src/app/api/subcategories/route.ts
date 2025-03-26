import { subcategories } from "../utils/mockData";
import { successResponse } from "../utils/response";

export async function GET() {
  return successResponse(subcategories, "Subcategories retrieved successfully");
}
