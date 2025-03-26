import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "../../utils/response";
import { products } from "../../utils/mockData";

/**
 * GET /api/products/:id
 * Fetch a product by ID.
 */
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  return product ? successResponse(product) : errorResponse("Product not found", 404);
}

/**
 * DELETE /api/products/:id
 * Delete a product by ID.
 */
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const index = products.findIndex((p) => p.id === params.id);
  if (index === -1) return errorResponse("Product not found", 404);

  const deletedProduct = products.splice(index, 1)[0];
  return successResponse(deletedProduct, "Product deleted successfully");
}
