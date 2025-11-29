import { useEffect, useRef } from "react";
import type { AddToCart, DessertWOQ } from "../../../lib/types/product-types";
import { ActionButton } from "./ActionButton";

export const ProductAction = ({
  addToCart,
  dessert,
  quantity,
}: {
  dessert: DessertWOQ;
  addToCart: AddToCart;
  quantity?: number;
}) => {
  const disabled: { disabled?: boolean } = {};
  if (quantity) disabled.disabled = true;
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      const { current } = inputRef;
      if (!quantity && current !== document.activeElement)
        current.disabled = true;
      else current.removeAttribute("disabled");
    }
  }, [quantity]);
  return (
    <div className="relative">
      <button
        className={`rose-50 p-2 rounded-l-full rounded-r-full border-2 b-rose-400 active-b-red active-out-red m-auto -translate-y-1/2 px-8 flex gap-4 items-center justify-center transition-transform duration-300 ${
          quantity ? "scale-0" : ""
        }`}
        type="button"
        onClick={() => addToCart(dessert)}
        {...disabled}
      >
        <img src="./assets/images/icon-add-to-cart.svg" alt="" />
        Add to cart
      </button>
      <div
        className={`red c-rose-50 p-4 py-3 rounded-x-full max-w-7/10 absolute inset-x-0 mx-auto top-0 -translate-y-1/2 flex gap-4 items-center transition-transform duration-300 ${
          !quantity ? "scale-0 focus-within:scale-100" : ""
        }`}
      >
        <ActionButton
          increment={false}
          onClick={() => addToCart(dessert, -1)}
          disabled={!quantity}
        />

        <input
          type="number"
          className="min-w-0 grow text-center focus:outline-none"
          min={1}
          onChange={({ target: { value } }) =>
            addToCart(dessert, +value, false)
          }
          value={quantity || ""}
          ref={inputRef}
          aria-label={"Insert the number you want for the " + dessert.name}
        />
        <ActionButton disabled={!quantity} onClick={() => addToCart(dessert)} />
      </div>
    </div>
  );
};
