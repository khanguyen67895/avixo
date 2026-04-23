"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon } from "lucide-react";
import Button from "../ui/button";

export function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Trang Chủ" },
    { href: "/solutions", label: "Giải pháp" },
    { href: "/partners", label: "Đối tác" },
    { href: "/news", label: "Tin tức" },
    { href: "/track-record", label: "Track record" },
    { href: "/about", label: "Tìm hiểu AVIXO" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 text-white">
      <div className="mx-auto flex h-[72px] w-full items-center justify-between px-10 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo-avixo.png" alt="AVIXO Logo" className="h-8 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative py-2 text-sm font-medium transition-colors ${isActive
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-[#37C0FF] to-[#0076FF]"
                  : "text-zinc-400 hover:text-white"
                  }`}
              >
                {isActive && (
                  <img src="/images/ic_sparkle.png" alt="Active" className="absolute -left-5 top-[10px] w-5 h-5" />
                )}
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* <Link
            href="/contact"
            className="hidden sm:flex items-center justify-center rounded-full bg-gradient-to-r from-[#37C0FF] to-[#0076FF] hover:opacity-90 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(55,192,255,0.4)]"
          >
            Liên hệ ngay
          </Link> */}
          <Button href="/contact">Liên hệ ngay</Button>

          <div className="flex items-center gap-2">
            <img src="/images/ic_dark_mode.png" alt="Dark mode" className="w-10 h-10" />

            <img src="/images/ic_lang.png" alt="Language" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </header>
  );
}
