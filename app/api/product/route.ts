import { parsedEnv } from "@/env";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const product = {
    name: "Product 1",
    price: 100,
  };

  // here we can access the env variables
  console.log(parsedEnv.DATABASE_URL);

  return NextResponse.json(product);
}
