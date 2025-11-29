import type { Dessert } from "../../lib/types/product-types";
import { ProductElement } from "./productElement/ProductElement";

export const ProductList = ({ desserts }: { desserts: Dessert[] }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {desserts.map((dessert, key) => (
        <ProductElement {...dessert} key={key} />
      ))}
    </div>
  );
};
