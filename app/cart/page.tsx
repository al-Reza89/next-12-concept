"use client"; // This ensures that this module runs on the client side only

import React from "react";
import { z } from "zod";

const cartSchema = z.array(
  z.object({
    id: z.number(),
    quantity: z.number().int().positive(),
  })
);

const Cart = () => {
  if (typeof window !== "undefined") {
    // Retrieve cart data from localStorage
    const cartData = localStorage.getItem("cart");

    // Check if cartData is null or undefined, then set it to an empty array
    const cart: unknown = JSON.parse(cartData || "[]");

    // Validate the cart data using Zod
    const validatedCart = cartSchema.safeParse(cart);

    // If validation fails, remove the outdated cart from localStorage and return
    if (!validatedCart.success) {
      localStorage.removeItem("cart");
      return;
    }

    // If validation succeeds, you can use the data safely like cartSchema
    console.log(validatedCart.data.map((item) => item.id));
  }

  return <div>Cart</div>;
};

export default Cart;
