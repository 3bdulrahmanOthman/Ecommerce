import { NextResponse } from "next/server";

export function successResponse<T>(data: T, message = "Success", status: number = 200) {
  return NextResponse.json({ success: true, message, data }, { status });
}

export function errorResponse(message = "Something went wrong", status: number = 400) {
  return NextResponse.json({ success: false, message }, { status });
}

