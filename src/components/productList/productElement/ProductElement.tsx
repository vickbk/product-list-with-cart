import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { SROnly } from "../../shared/SROnly";
import { ProductAction } from "./ProductAction";

export const ProductElement = () => {
  return (
    <Article>
      <img src="./whatever" alt="Just a place holder" />
      <ProductAction />
      <Heading>
        Waffle <SROnly>dessert</SROnly>
      </Heading>
      <p>
        Waffle with Berries
        <span>$6.50</span>
      </p>
    </Article>
  );
};
