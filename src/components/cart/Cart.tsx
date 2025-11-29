import { useContext, type CSSProperties } from "react";
import { Article } from "../shared/Article";
import { Heading } from "../shared/Heading";
import { SROnly } from "../shared/SROnly";
import { EmptyCart } from "./EmptyCart";
import { CartItem } from "./CartItem";
import { FullCart } from "./FullCart";
import { CartCtx } from "../../contexts/CartCtx";

export const Cart = () => {
  const [desserts, { deleteFromCart, setShowOrder }] = useContext(CartCtx);
  const { total, totalItems } = desserts.reduce(
    ({ total, totalItems }, { price, quantity }) => ({
      total: total + price * quantity,
      totalItems: totalItems + quantity,
    }),
    { total: 0, totalItems: 0 }
  );
  return (
    <Article
      className="rose-20 p-8 rounded-xl"
      style={{ "--bg-accent": 1 } as CSSProperties}
    >
      <Heading className="c-red font-bold text-2xl mb-4">
        Your cart <SROnly>has</SROnly> ({totalItems}){" "}
        <SROnly>desserts currently</SROnly>
      </Heading>
      {total === 0 && <EmptyCart />}
      <FullCart hide={total === 0} total={total} setShowOrder={setShowOrder}>
        {desserts.map((dessert, key) => (
          <CartItem
            {...dessert}
            key={key}
            deleteFromCart={() => deleteFromCart(key)}
          />
        ))}
      </FullCart>
    </Article>
  );
};
