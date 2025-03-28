import { NextRequest } from "next/server";
import { errorResponse, successResponse } from "../../utils/response";
import { products } from "../../utils/mockData";

/**
 * ✅ GET /api/products/:id
 * Fetch a product by ID.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  console.log("Fetching product with ID:", id);

  if (!id) {
    return errorResponse("Product ID is required", 400);
  }

  const product = products.find((p) => p.id === id);

  if (!product) {
    console.error(`Product not found for ID: ${id}`);
    return errorResponse("Product not found", 404);
  }

  return successResponse(product);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  console.log("Deleting product with ID:", id);

  if (!id) {
    return errorResponse("Product ID is required", 400);
  }

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    console.error(`Failed to delete: Product with ID ${id} not found`);
    return errorResponse("Product not found", 404);
  }

  const deletedProduct = products.splice(index, 1);
  // const deletedProduct = products.filter((p) => p.id !== id)[0];
  console.log(`Product deleted successfully: ${JSON.stringify(deletedProduct)}`);

  return successResponse(deletedProduct, "Product deleted successfully");
}
