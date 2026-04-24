"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
      <div className="mx-auto flex h-18 w-full items-center justify-between px-10 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo-avixo.png" alt="AVIXO Logo" width={120} height={32} className="h-8 w-auto" />
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
                  ? "bg-clip-text text-transparent bg-linear-to-r from-[#37C0FF] to-[#0076FF]"
                  : "text-zinc-400 hover:text-white"
                  }`}
              >
                {isActive && (
                  <Image src="/images/ic_sparkle.png" alt="Active" width={20} height={20} className="absolute -left-5 top-2.5 w-5 h-5" />
                )}
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Button href="/contact">Liên hệ ngay</Button>

          <div className="flex items-center gap-2">
            <Image src="/images/ic_dark_mode.png" alt="Dark mode" width={40} height={40} className="w-10 h-10" />
            <Image src="/images/ic_lang.png" alt="Language" width={32} height={32} className="w-8 h-8" />
          </div>
        </div>
      </div>
    </header>
  );
}
