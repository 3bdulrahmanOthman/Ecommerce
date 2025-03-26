import { getErrorMessage } from "./handle-error";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function apiRequest<T>({
  resource,
  method = "GET",
  body,
  id,
  params,
  cache = "no-cache",
  revalidate,
  tags,
  headers = {},
}: {
  resource: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  id?: string;
  params?: Record<string, string | number>;
  cache?: RequestCache;
  revalidate?: number;
  tags?: string[];
  headers?: Record<string, string>;
}): Promise<T> {
  try {
    const url = new URL(`${API_BASE_URL}/api/${resource}${id ? `/${id}` : ""}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, value.toString())
      );
    }

    const res = await fetch(url.toString(), {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers, 
      },
      body: body ? JSON.stringify(body) : undefined,
      cache, 
      credentials: "include",
      next: revalidate || tags ? { revalidate, tags } : undefined,
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      throw new Error(`Fetch error: ${res.status} ${errorBody.message || res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error(`API Fetch Error (${method} ${resource}):`, getErrorMessage(error));
    throw error;
  }
}

