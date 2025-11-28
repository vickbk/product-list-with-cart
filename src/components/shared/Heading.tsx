import { forwardRef, useContext, type HTMLAttributes } from "react";
import { HeadingCtx } from "../../contexts/HeadingCtx";

export const Heading = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ children, ...props }) => {
  const level = useContext(HeadingCtx);
  const headings = [
    <h1 {...props}>{children}</h1>,
    <h2 {...props}>{children}</h2>,
    <h3 {...props}>{children}</h3>,
    <h4 {...props}>{children}</h4>,
    <h5 {...props}>{children}</h5>,
    <h6 {...props}>{children}</h6>,
  ];
  return <>{headings[level]}</>;
});
