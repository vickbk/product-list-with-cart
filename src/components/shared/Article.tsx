import { forwardRef, useContext, type HTMLAttributes } from "react";
import { HeadingCtx } from "../../contexts/HeadingCtx";

export const Article = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ children, ...props }) => {
    const level = useContext(HeadingCtx);
    return (
      <article {...props}>
        <HeadingCtx value={level + 1}>{children}</HeadingCtx>
      </article>
    );
  }
);
