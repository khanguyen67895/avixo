"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useContactModal } from "./contact-context";

import { CONTACT_SUBJECTS as SUBJECTS } from "@/lib/constants";

function AnimatedCard({ close }: { close: () => void }) {
  const [subject, setSubject] = useState("investor");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit() {
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setLoading(true);
    setStatus("idle");
    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, name, phone, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName(""); setPhone(""); setEmail(""); setMessage("");
        setTimeout(() => close(), 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="relative w-full max-w-4xl rounded-[28px] overflow-hidden shadow-2xl flex flex-col md:flex-row bg-white"
    >
      {/* <img src="/images/ic_bg1.png" alt="" className="object-cover pointer-events-none absolute inset-0 w-full h-full" /> */}

      {/* Close button */}
      <button
        onClick={close}
        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full border border-zinc-200 bg-white/80 flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors"
      >
        <X size={16} />
      </button>

      {/* ── Left panel ── transparent, bg shows through */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-10 py-12 md:w-[40%]">
        <div className="relative w-36 h-36 mb-6">
          <img
            src="/images/ic_investor.png"
            alt="AVIXO"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 mb-3 leading-snug">
          Liên hệ với AVIXO
        </h2>
        <p className="text-zinc-500 text-sm leading-relaxed max-w-[220px]">
          Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng sự phát triển của bạn.
        </p>
      </div>

      {/* ── Right panel ── transparent so ic_bg1 shows through entire card */}
      <div className="relative z-10 flex-1 px-8 py-10 flex flex-col gap-5">
        <h3 className="text-lg font-bold text-zinc-900">Gửi yêu cầu hỗ trợ</h3>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-3">Chủ đề</label>
          <div className="flex flex-wrap gap-4">
            {SUBJECTS.map((s) => (
              <label key={s.value} className="flex items-center gap-2 cursor-pointer">
                <span
                  onClick={() => setSubject(s.value)}
                  className={`rounded-full border-2 flex items-center justify-center transition-colors ${
                    subject === s.value
                      ? "border-[#37C0FF] bg-[#37C0FF]"
                      : "border-zinc-300"
                  }`}
                  style={{ width: 18, height: 18, flexShrink: 0 }}
                >
                  {subject === s.value && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                  )}
                </span>
                <span
                  onClick={() => setSubject(s.value)}
                  className="text-sm text-zinc-700 select-none"
                >
                  {s.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">Họ Và Tên</label>
          <input
            type="text"
            placeholder="Tên của bạn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#37C0FF] focus:ring-1 focus:ring-[#37C0FF]/30 transition bg-white/90"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">Số điện thoại</label>
          <input
            type="tel"
            placeholder="0912 345 678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#37C0FF] focus:ring-1 focus:ring-[#37C0FF]/30 transition bg-white/90"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">Email Liên hệ</label>
          <input
            type="email"
            placeholder="name@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#37C0FF] focus:ring-1 focus:ring-[#37C0FF]/30 transition bg-white/90"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">Nội dung</label>
          <textarea
            placeholder="nội dung tin nhắn"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#37C0FF] focus:ring-1 focus:ring-[#37C0FF]/30 transition resize-none bg-white/90"
          />
        </div>

        {/* Status messages */}
        {status === "success" && (
          <p className="text-sm text-green-600 font-medium text-center">✅ Yêu cầu đã được gửi thành công!</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500 font-medium text-center">❌ Có lỗi xảy ra, vui lòng thử lại.</p>
        )}

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#37C0FF] to-[#0076FF] text-white font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(55,192,255,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Đang gửi..." : "Gửi tin nhắn ngay"}
        </button>
      </div>
    </motion.div>
  );
}

export function ContactModal() {
  const { isOpen, close } = useContactModal();

  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="contact-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <AnimatedCard close={close} />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
