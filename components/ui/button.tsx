"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Variant = "primary" | "outline" | "light";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    fullWidth?: boolean;
    href?: string;
}

const base = "flex items-center justify-center py-[9.5px] px-8 rounded-full transition-all active:scale-95";

const variants: Record<Exclude<Variant, "outline">, string> = {
    primary:
        "bg-gradient-to-r from-[#37C0FF] to-[#0076FF] text-white hover:opacity-90 border border-[#0076FF] hover:scale-105 shadow-[0_0_15px_rgba(55,192,255,0.3)]",
    light:
        "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.25)]",
};

export default function Button({
    variant = "primary",
    fullWidth = false,
    className,
    children,
    href,
    ...props
}: ButtonProps) {
    const widthClass = fullWidth ? "w-full" : "w-fit";

    // Outline: gradient border via 1px wrapper
    if (variant === "outline") {
        const inner = clsx(
            "flex items-center justify-center py-[9.5px] px-8 rounded-full transition-all active:scale-95",
            "bg-[#131422] text-white hover:bg-[#0f172a] hover:scale-105 w-full"
        );

        const wrapper = clsx(
            "p-[1px] rounded-full bg-gradient-to-b from-[#37C0FF] to-[#005DFF] hover:scale-105 transition-transform",
            widthClass,
            className
        );

        if (href) {
            return (
                <div className={wrapper}>
                    <Link href={href} className={inner}>{children}</Link>
                </div>
            );
        }
        return (
            <div className={wrapper}>
                <button className={inner} {...props}>{children}</button>
            </div>
        );
    }

    const classes = clsx(base, variants[variant], widthClass, className);

    if (href) {
        return <Link href={href} className={classes}>{children}</Link>;
    }

    return <button className={classes} {...props}>{children}</button>;
}
