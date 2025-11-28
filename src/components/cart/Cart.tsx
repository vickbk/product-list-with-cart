import { Article } from "../shared/Article";
import { Heading } from "../shared/Heading";
import { SROnly } from "../shared/SROnly";
import { EmptyCart } from "./EmptyCart";

export const Cart = () => {
  return (
    <Article>
      <Heading>
        Your cart <SROnly>has</SROnly> (0) <SROnly>desserts</SROnly>
      </Heading>
      <EmptyCart />
    </Article>
  );
};
