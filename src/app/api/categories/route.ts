import { categories } from "../utils/mockData";
import { successResponse } from "../utils/response";

export async function GET() {
  return successResponse(categories, "Categories retrieved successfully");
}
