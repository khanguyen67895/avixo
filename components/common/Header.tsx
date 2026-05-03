"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/button";
import { useContactModal } from "./contact-context";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openContact } = useContactModal();

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
      <div className="mx-auto flex h-16 w-full items-center justify-between px-4 md:px-10 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/images/logo-avixo.png" alt="AVIXO Logo" width={120} height={32} className="h-7 md:h-8 w-auto" />
        </Link>

        {/* Navigation — desktop */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative py-2 text-[16px] font-medium transition-colors ${
                  isActive
                    ? "bg-clip-text text-transparent bg-linear-to-r from-[#37C0FF] to-[#0076FF]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <Image src="/images/ic_sparkle.png" alt="" width={20} height={20} className="absolute -left-5 top-3.5 w-5 h-5" />
                )}
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* <div className="hidden sm:block">
            <Button onClick={openContact}>Liên hệ ngay</Button>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Image src="/images/ic_dark_mode.png" alt="Dark mode" width={36} height={36} className="w-9 h-9" />
            <Image src="/images/ic_lang.png" alt="Language" width={30} height={30} className="w-7 h-7" />
          </div> */}

          {/* Hamburger — mobile */}
          {/* <button
            className="flex md:hidden items-center justify-center w-9 h-9 rounded-lg text-white"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button> */}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-t border-white/5 px-4 py-3 flex flex-col gap-1">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#37C0FF] bg-white/5"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="pt-3 mt-1 border-t border-white/5">
            <Button fullWidth onClick={() => { setMenuOpen(false); openContact(); }}>Liên hệ ngay</Button>
          </div>
        </div>
      )}
    </header>
  );
}
