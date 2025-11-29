import { createContext } from "react";
import type { CartContextParams } from "../lib/types/product-types";

export const CartCtx = createContext<CartContextParams>([
  [],
  { addToCart() {}, deleteFromCart() {} },
]);
