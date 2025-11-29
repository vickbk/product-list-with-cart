import { useContext } from "react";
import type { Dessert } from "../../../lib/types/product-types";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { SROnly } from "../../shared/SROnly";
import { ProductAction } from "./ProductAction";
import { CartCtx } from "../../../contexts/CartCtx";

export const ProductElement = (dessert: Dessert) => {
  const [, { addToCart }] = useContext(CartCtx);
  const {
    name,
    price,
    category,
    image: { tablet, mobile, desktop },
  } = dessert;
  return (
    <Article className="font-semibold">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        <source media="(min-width: 640px)" srcSet={tablet} />
        <img className="rounded-xl" src={mobile} alt="Just a place holder" />
      </picture>
      <ProductAction dessert={dessert} addToCart={addToCart} />
      <Heading className="c-rose-500 font-normal">
        {category} <SROnly>dessert</SROnly>
      </Heading>
      <p>
        {name}
        <span className="block c-red">${price.toFixed(2)}</span>
      </p>
    </Article>
  );
};
