"use client";

import React, { use, useEffect } from "react";
import { z } from "zod";

// we expect z an object with name and price
const productSchema = z.object({
  name: z.string(),
  price: z.number(),
});

// if we need a typescript type fo helper functions or other
// this will give us the typescript type for the product
type Product = z.infer<typeof productSchema>;

const getProductPrice = (product: Product) => {
  return product.price;
};

const Product = () => {
  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((product: unknown) => {
        // use zod to validate product
        // this will ensure that the product and what we expect it to be
        const validatedProduct = productSchema.safeParse(product);

        // if the product does not match the schema
        if (!validatedProduct.success) {
          console.error(validatedProduct.error.message);
          return;
        }

        // if the product does match the schema
        console.log(validatedProduct.data);
      });
  }, []);

  return <div>Product</div>;
};

export default Product;
