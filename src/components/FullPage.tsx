import { Cart } from "./cart/Cart";
import { ProductList } from "./productList/ProductList";
import { Heading } from "./shared/Heading";
import { Main } from "./shared/Main";
import { SROnly } from "./shared/SROnly";
import { default as desserts } from "../assets/data.json";
import { CartCtx } from "../contexts/CartCtx";
import { useContext, useState } from "react";
import type { Dessert, DessertWQ } from "../lib/types/product-types";

export const FullPage = () => {
  const [cartItems] = useContext(CartCtx);
  const [items, setItems] = useState(cartItems);
  const addToCart = (dessert: Dessert, add: 1 | -1 = 1) => {
    const { name } = dessert;
    const has = items.some(({ name: cartName }) => cartName === name);
    let newItems: DessertWQ[] = [];
    if (has)
      newItems = items.map((item) =>
        item.name === name ? { ...item, quatity: item.quantity + add } : item
      );
    else newItems = [...items, { ...dessert, quantity: 1 }];
    setItems(newItems);
  };
  const deleteFromCart = (index: number) => {
    setItems(items.filter((_, i) => i === index));
  };
  return (
    <Main
      className="p-4 grid lg:grid-cols-[3fr_1fr] items-start max-w-300 gap-4 tracking-tight"
      pageHasH1={false}
    >
      <CartCtx value={[items, { addToCart, deleteFromCart }]}>
        <div>
          <Cart />
          <Heading className="font-bold text-5xl mb-8">
            <SROnly>A list of </SROnly> Desserts
          </Heading>
          <ProductList desserts={desserts} />
        </div>
      </CartCtx>
    </Main>
  );
};
