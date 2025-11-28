import { Article } from "../shared/Article";
import { Heading } from "../shared/Heading";

export const EmptyCart = () => {
  return (
    <Article>
      <img
        src="/assets/images/illustration-empty-cart.svg"
        alt="Empty cart illustration"
      />
      <Heading>Your added items will appear here.</Heading>
    </Article>
  );
};
