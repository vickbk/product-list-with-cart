import { Article } from "../shared/Article";
import { Heading } from "../shared/Heading";

export const EmptyCart = () => {
  return (
    <Article className="grid justify-items-center">
      <Heading>Your added items will appear here.</Heading>
      <img
        className="row-start-1"
        src="/assets/images/illustration-empty-cart.svg"
        alt="Your cart is empty for now."
      />
    </Article>
  );
};
