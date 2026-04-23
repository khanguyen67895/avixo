import React from "react";
import clsx from "clsx";
import { Science_Gothic } from "next/font/google";

export const scienceGothic = Science_Gothic({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      className={clsx(scienceGothic.className, className)}
      {...props}
    >
      {children}
    </Component>
  );
}