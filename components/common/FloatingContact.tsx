"use client";

import { useContactModal } from "./contact-context";

export function FloatingContact() {
  const { open } = useContactModal();

  return (
    <button
      onClick={open}
      className="fixed bottom-6 right-6 z-[100] px-6 py-3 rounded-full bg-gradient-to-r from-[#37C0FF] to-[#0076FF] text-white text-sm font-semibold shadow-[0_4px_20px_rgba(55,192,255,0.45)] hover:opacity-90 hover:scale-105 active:scale-95 transition-all"
    >
      Liên hệ ngay
    </button>
  );
}
