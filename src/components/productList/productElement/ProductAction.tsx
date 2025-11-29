import type { AddToCart, Dessert } from "../../../lib/types/product-types";

export const ProductAction = ({
  addToCart,
  dessert,
}: {
  dessert: Dessert;
  addToCart: AddToCart;
}) => {
  return (
    <button
      className="rose-50 p-2 rounded-l-full rounded-r-full border-2 b-rose-400 m-auto -translate-y-1/2 px-8 flex gap-4 items-center justify-center"
      type="button"
      onClick={() => addToCart(dessert)}
    >
      <img src="/assets/images/icon-add-to-cart.svg" alt="" />
      Add to cart
    </button>
  );
};
