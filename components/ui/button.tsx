// components/ui/Button.tsx
"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Variant = "primary" | "outline" | "light";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    fullWidth?: boolean;
    href?: string;
}

export default function Button({
    variant = "primary",
    fullWidth = false,
    className,
    children,
    href,
    ...props
}: ButtonProps) {
    const base =
        "flex items-center justify-center py-3.5 px-8 rounded-full font-semibold transition-all active:scale-95 font-['Science_Gothic',_sans-serif]";

    const variants: Record<Variant, string> = {
        primary:
            "bg-gradient-to-r from-[#37C0FF] to-[#0076FF] text-white hover:opacity-90 hover:scale-105 shadow-[0_0_15px_rgba(55,192,255,0.3)]",
        outline:
            "bg-[#0a0f1c] border border-[#00b4ff]/40 text-white hover:bg-[#0f172a] hover:border-[#00b4ff]/70 hover:scale-105",
        light:
            "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors",
    };

    const classes = clsx(
        base,
        variants[variant],
        fullWidth ? "w-full" : "flex-1",
        className
    );

    // 👉 Nếu có href → dùng Link
    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}