import type { ReactNode } from "react";
import { Heading } from "../shared/Heading";
import { Section } from "../shared/Section";
import { SROnly } from "../shared/SROnly";

export const FullCart = ({
  children,
  total,
  hide,
  order = false,
  setShowOrder,
}: {
  hide: boolean;
  total: number;
  children: ReactNode;
  order?: boolean;
  setShowOrder?: (showOrder: true) => void;
}) => {
  return (
    <Section
      className={`transition-transform duration-300 ${
        hide ? "scale-0 absolute" : ""
      }`}
      aria-hidden={hide}
    >
      <Heading className="sr-only">list of desserts currently on cart</Heading>
      {children}
      <p className="flex justify-between items-center py-4">
        Order Total<SROnly>: </SROnly>{" "}
        <span className="font-bold text-2xl">${total.toFixed(2)}</span>
      </p>
      {!order && (
        <p className="flex gap-4 justify-center rose-100 p-4 rounded-lg">
          <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
          <span>
            This is a <span>carbon-neutral</span> delivery
          </span>
        </p>
      )}
      {!order && !hide && (
        <button
          type="button"
          className="red c-rose-50 w-full p-4 rounded-x-full mt-4"
          onClick={() => setShowOrder!(true)}
        >
          Confirm Order
        </button>
      )}
    </Section>
  );
};
