import { forwardRef, useContext, type HTMLAttributes } from "react";
import { HeadingCtx } from "../../contexts/HeadingCtx";

export const Main = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ children, ...props }) => {
    const level = useContext(HeadingCtx);
    return (
      <main {...props}>
        <HeadingCtx value={level + 1}>{children}</HeadingCtx>
      </main>
    );
  }
);
