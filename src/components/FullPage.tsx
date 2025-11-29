import { Cart } from "./cart/Cart";
import { ProductList } from "./productList/ProductList";
import { Heading } from "./shared/Heading";
import { Main } from "./shared/Main";
import { SROnly } from "./shared/SROnly";
import { default as desserts } from "../assets/data.json";
import { CartCtx } from "../contexts/CartCtx";
import { useContext, useState } from "react";
import type { Dessert, DessertWQ } from "../lib/types/product-types";
import { Order } from "./order/Order";

export const FullPage = () => {
  const [cartItems] = useContext(CartCtx);
  const [items, setItems] = useState(cartItems);
  const [showOrder, setShowOrder] = useState(false);
  const addToCart = (dessert: Dessert, add: number = 1, isButton = true) => {
    const { name } = dessert;
    const has = items.some(({ name: cartName }) => cartName === name);
    let newItems: DessertWQ[] = items;
    if (has)
      newItems = items
        .map((item) => {
          if (item.name !== name) return item;
          let { quantity } = item;
          quantity =
            add === -1 || (isButton && add === 1) ? quantity + add : add;
          if (quantity < 1) return null;
          return { ...item, quantity };
        })
        .filter((d) => d !== null);
    else if (add > 0) newItems = [...items, { ...dessert, quantity: add }];
    setItems(newItems);
  };
  const deleteFromCart = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };
  const confirmOrder = () => {
    setItems([]);
    setShowOrder(false);
  };
  return (
    <Main
      className="p-4 grid lg:grid-cols-[3fr_1fr] items-start max-w-325 gap-4 tracking-tight"
      pageHasH1={false}
    >
      <CartCtx value={[items, { addToCart, deleteFromCart, setShowOrder }]}>
        <div>
          <Heading className="font-bold text-5xl mb-8">
            <SROnly>A list of </SROnly> Desserts
          </Heading>
          <ProductList desserts={desserts} />
        </div>
        <Cart />
        {showOrder && <Order confirmOrder={confirmOrder} />}
      </CartCtx>
    </Main>
  );
};
