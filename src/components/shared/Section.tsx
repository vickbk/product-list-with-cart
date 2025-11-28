import { forwardRef, useContext, type HTMLAttributes } from "react";
import { HeadingCtx } from "../../contexts/HeadingCtx";

export const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ children, ...props }) => {
    const level = useContext(HeadingCtx);
    return (
      <section {...props}>
        <HeadingCtx value={level + 1}>{children}</HeadingCtx>
      </section>
    );
  }
);
