import type { DessertWQ } from "../../lib/types/product-types";
import { Article } from "../shared/Article";
import { Heading } from "../shared/Heading";

export const CartItem = ({
  name,
  image: { thumbnail },
  price,
  quantity,
  deleteFromCart,
  order,
}: DessertWQ & { deleteFromCart?: () => void; order?: boolean }) => {
  const qtyPrice = (
    <span
      className={`font-semibold ${
        order ? "ml-auto c-rose-500" : " c-rose-400 ml-2"
      }`}
    >
      ${(price * quantity).toFixed(2)}
    </span>
  );
  return (
    <Article className="flex gap-4 py-4 items-center border-b b-rose-300">
      {order && (
        <img className="rounded-lg" width={50} src={thumbnail} alt="" />
      )}
      <div>
        <Heading className="font-semibold">{name}</Heading>
        <p className="c-rose-400">
          <span className="mr-4 c-red font-semibold">{quantity}x</span> @$
          {price.toFixed(2)} {!order && qtyPrice}
        </p>
      </div>
      {!order ? (
        <button
          className="ml-auto border rounded-full p"
          type="button"
          onClick={deleteFromCart}
        >
          <img
            src="./assets/images/icon-remove-item.svg"
            alt="Remove item"
            width={15}
          />
        </button>
      ) : (
        qtyPrice
      )}
    </Article>
  );
};
