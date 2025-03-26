import { NextRequest } from "next/server";
import { categories } from "../../utils/mockData";
import { errorResponse, successResponse } from "../../utils/response";

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;
  console.log("Fetching category for ID:", id);

  if (!id) {
    return errorResponse("Category ID is required", 400);
  }

  const category = categories.find((c) => c.id === id);

  if (!category) {
    console.error(`Category not found for ID: ${id}`);
    return errorResponse("Category not found", 404);
  }

  return successResponse(category);
}