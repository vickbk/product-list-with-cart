import { useContext, type CSSProperties } from "react";
import { Article } from "../shared/Article";
import { Heading } from "../shared/Heading";
import { SROnly } from "../shared/SROnly";
import { EmptyCart } from "./EmptyCart";
import { CartItem } from "./CartItem";
import { FullCart } from "./FullCart";
import { CartCtx } from "../../contexts/CartCtx";

export const Cart = () => {
  const [desserts] = useContext(CartCtx);
  const total = desserts.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );
  return (
    <Article
      className="rose-50 p-8 rounded-xl"
      style={{ "--bg-accent": 1 } as CSSProperties}
    >
      <Heading className="c-red font-bold text-2xl mb-4">
        Your cart <SROnly>has</SROnly> (0) <SROnly>desserts currently</SROnly>
      </Heading>
      {total === 0 && <EmptyCart />}
      <FullCart hide={total === 0} total={total}>
        {desserts.map((dessert, key) => (
          <CartItem {...dessert} key={key} />
        ))}
      </FullCart>
    </Article>
  );
};
