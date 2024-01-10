import { signUpSchema } from "@/lib/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: unknown = await request.json();

  const result = signUpSchema.safeParse(body);

  if (!result.success) {
    return {
      status: 400,
      body: result.error,
    };
  }

  return NextResponse.json(result.data, {
    status: 201,
  });
}
