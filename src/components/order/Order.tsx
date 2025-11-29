import { useContext } from "react";
import CustomDialog from "../shared/CustomDialog";
import { Heading } from "../shared/Heading";
import { Section } from "../shared/Section";
import { CartCtx } from "../../contexts/CartCtx";
import { CartItem } from "../cart/CartItem";
import { FullCart } from "../cart/FullCart";

export const Order = ({ confirmOrder }: { confirmOrder: () => void }) => {
  const [cartItems] = useContext(CartCtx);
  const total = cartItems.reduce(
    (total, { quantity, price }) => total + quantity * price,
    0
  );
  return (
    <CustomDialog
      className="m-auto p-8 w-full max-w-125 rounded-lg"
      isOpen={true}
    >
      <Section className="grid gap-4">
        <img src="./assets/images/icon-order-confirmed.svg" alt="" />
        <Heading className="text-4xl font-bold">Order Confirmed</Heading>
        <p className="c-rose-400">We hope you enjoy your food!</p>
        <div className="p-4 rose-100 rounded-lg">
          <FullCart hide={false} total={total} order={true}>
            {cartItems.map((item, key) => (
              <CartItem {...item} key={key} order={true} />
            ))}
          </FullCart>
        </div>
        <button
          type="button"
          className="red c-rose-50 w-full p-4 rounded-x-full mt-4"
          onClick={confirmOrder}
        >
          Start New Order
        </button>
      </Section>
    </CustomDialog>
  );
};
