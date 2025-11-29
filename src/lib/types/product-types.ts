import type { ImageTypes } from "./shared-types";

export type Dessert = {
  name: string;
  category: string;
  price: number;
  image: Record<ImageTypes, string>;
};

export type DessertWQ = Dessert & { quantity: number };

export type DessertWOQ = Dessert & { quantity?: number };

export type AddToCart = (dessert: Dessert) => void;

export type DeleteFromCart = (index: number) => void;

export type CartContextParams = [
  DessertWQ[],
  {
    addToCart: AddToCart;
    deleteFromCart: DeleteFromCart;
  }
];
