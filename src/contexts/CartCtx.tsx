import { createContext } from "react";
import type { DessertWQ } from "../lib/types/product-types";

export const CartCtx = createContext<DessertWQ[]>([]);
