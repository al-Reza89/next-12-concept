"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { z } from "zod";

const searchParamsSchema = z.object({
  // searchParams gives me string so zod will convert it to number
  id: z.coerce.number(),
  color: z.enum(["red", "blue", "green"]),
});

const ProductDetails = () => {
  const searchParams = useSearchParams();

  // ths will give me an object with id and color
  const searchParamsObject = Object.fromEntries(searchParams);

  // validate the searchParamsObject with zod
  const validatedSearchParams =
    searchParamsSchema.safeParse(searchParamsObject);

  if (!validatedSearchParams.success) {
    return <div>Invalid search params</div>;
  }

  // if validation succeeds
  console.log(validatedSearchParams.data);

  return <div>ProductDetails</div>;
};

export default ProductDetails;
