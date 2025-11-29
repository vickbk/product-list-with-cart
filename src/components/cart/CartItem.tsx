import { Article } from "../shared/Article";
import { Heading } from "../shared/Heading";

export const CartItem = () => {
  return (
    <Article className="flex gap-4 py-4 items-center border-b b-rose-300">
      <img
        className="rounded-lg"
        width={50}
        src="/assets/images/image-baklava-thumbnail.jpg"
        alt=""
      />
      <div>
        <Heading className="font-semibold">Classic Tirasimu</Heading>
        <p className="c-rose-400">
          <span className="mr-4 c-red font-semibold">4x</span> @$5.50{" "}
          <span className="font-semibold c-rose-400 ml-2">$28.00</span>
        </p>
      </div>
      <button className="ml-auto border rounded-full p" type="button">
        <img
          src="/assets/images/icon-remove-item.svg"
          alt="Remove item"
          width={15}
        />
      </button>
    </Article>
  );
};
