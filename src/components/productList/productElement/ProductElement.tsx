import type { Dessert } from "../../../lib/types/product-types";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { SROnly } from "../../shared/SROnly";
import { ProductAction } from "./ProductAction";

export const ProductElement = ({
  name,
  price,
  category,
  image: { tablet, mobile, desktop },
}: Dessert) => {
  return (
    <Article className="font-semibold">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        <img className="rounded-lg" src={mobile} alt="Just a place holder" />
        <source media="(min-width: 576px)" srcSet={tablet} />
        <img className="rounded-lg" src={mobile} alt="Just a place holder" />
      </picture>
      <ProductAction />
      <Heading className="c-rose-400 font-normal">
        {category} <SROnly>dessert</SROnly>
      </Heading>
      <p>
        {name}
        <span className="block c-red">${price}</span>
      </p>
    </Article>
  );
};
