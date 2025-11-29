import type { CSSProperties } from "react";
import { Article } from "../shared/Article";
import { Heading } from "../shared/Heading";
import { SROnly } from "../shared/SROnly";
import { EmptyCart } from "./EmptyCart";

export const Cart = () => {
  return (
    <Article
      className="rose-50 p-4 rounded-2xl"
      style={{ "--bg-accent": 1 } as CSSProperties}
    >
      <Heading className="c-red font-bold text-2xl mb-4">
        Your cart <SROnly>has</SROnly> (0) <SROnly>desserts currently</SROnly>
      </Heading>
      <EmptyCart />
    </Article>
  );
};
