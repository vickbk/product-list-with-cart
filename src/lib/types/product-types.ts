import type { ImageTypes } from "./shared-types";

export type Dessert = {
  name: string;
  category: string;
  price: number;
  image: Record<ImageTypes, string>;
};
