import React from "react";
import clsx from "clsx";

type TextProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export default function Text({
  as: Component = "p",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={clsx("font-(family-name:--font-science-gothic)", className)}
      {...props}
    >
      {children}
    </Component>
  );
}