import { NextRequest } from "next/server";
import { randomUUID } from "crypto";
import { products } from "../utils/mockData";
import { errorResponse, successResponse } from "../utils/response";

export async function GET() {
    return successResponse(products, "Products retrieved successfully"); 
}


export async function POST(req: NextRequest) {
  try {
    const { name, price, categoryId } = await req.json();

    if (!name || !price || !categoryId) {
      return errorResponse("Missing required fields", 400);
    }

    const newProduct = {
      id: randomUUID(),
      name,
      price,
      categoryId,
      createdAt: new Date(),
      stock: 0,
      status: "available",
      images: [], 
    };
    
    products.push(newProduct);
    return successResponse(newProduct, "Product created successfully", 201);
  } catch (error) {
    return errorResponse(error?.toString() || "Failed to create product", 500);
  }
}
    