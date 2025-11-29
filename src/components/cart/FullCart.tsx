import type { ReactNode } from "react";
import { Heading } from "../shared/Heading";
import { Section } from "../shared/Section";
import { SROnly } from "../shared/SROnly";

export const FullCart = ({ children }: { children: ReactNode }) => {
  return (
    <Section>
      <Heading className="sr-only">list of desserts currently on cart</Heading>
      {children}
      <p className="flex justify-between items-center py-4">
        Order Total<SROnly>: </SROnly>{" "}
        <span className="font-bold text-2xl">$46.50</span>
      </p>
      <p className="flex gap-4 justify-center rose-100 p-4 rounded-lg">
        <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
        <span>
          This is a <span>carbon-neutral</span> delivery
        </span>
      </p>
      <button
        type="button"
        className="red c-rose-50 w-full p-4 rounded-x-full mt-4"
      >
        Confirm Order
      </button>
    </Section>
  );
};
