import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { SROnly } from "../../shared/SROnly";
import { ProductAction } from "./ProductAction";

export const ProductElement = () => {
  return (
    <Article className="font-semibold">
      <picture>
        <source
          media="(min-width: 576px)"
          srcSet="/public/assets/images/image-baklava-desktop.jpg"
        />
        <img
          className="rounded-lg"
          src="/assets/images/image-baklava-mobile.jpg"
          alt="Just a place holder"
        />
      </picture>
      <ProductAction />
      <Heading className="c-rose-400 font-normal">
        Waffle <SROnly>dessert</SROnly>
      </Heading>
      <p>
        Waffle with Berries
        <span className="block c-red">$6.50</span>
      </p>
    </Article>
  );
};
