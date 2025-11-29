import type { AddToCart, DessertWOQ } from "../../../lib/types/product-types";

export const ProductAction = ({
  addToCart,
  dessert,
  quantity,
}: {
  dessert: DessertWOQ;
  addToCart: AddToCart;
  quantity?: number;
}) => {
  return (
    <div className="relative">
      <button
        className="rose-50 p-2 rounded-l-full rounded-r-full border-2 b-rose-400 m-auto -translate-y-1/2 px-8 flex gap-4 items-center justify-center"
        type="button"
        onClick={() => addToCart(dessert)}
      >
        <img src="/assets/images/icon-add-to-cart.svg" alt="" />
        Add to cart
      </button>
      <div className="red c-rose-50 p-4 rounded-x-full max-w-7/10 absolute inset-x-0 mx-auto top-0 -translate-y-1/2 flex gap-4 items-center">
        <button
          className="rounded-full border b-rose-50 p-1 aspect-square"
          type="button"
          onClick={() => addToCart(dessert, -1)}
        >
          <img
            src="/assets/images/icon-decrement-quantity.svg"
            alt="Decrement the number of items"
          />
        </button>
        <input
          type="number"
          className="min-w-0 grow text-center focus:outline-none"
          min={1}
          onChange={({ target: { value } }) =>
            addToCart(dessert, +value, false)
          }
          value={quantity || ""}
        />
        <button
          className="rounded-full border b-rose-50 p-1 aspect-square"
          type="button"
          onClick={() => addToCart(dessert)}
        >
          <img
            src="/assets/images/icon-increment-quantity.svg"
            alt="Increment the number of items"
          />
        </button>
      </div>
    </div>
  );
};
