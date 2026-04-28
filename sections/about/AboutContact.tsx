"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export function AboutContact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F8FAFC] rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
        >

          {/* Left */}
          <div className="flex flex-col items-start justify-center gap-8 p-10 md:p-14">
            {/* Logo ball */}
            <div className="w-20 h-20 rounded-full border-2 border-[#37C0FF]/30 shadow-[0_0_30px_rgba(55,192,255,0.15)] bg-white flex items-center justify-center">
              <div className="relative w-12 h-12">
                <Image src="/images/ic_investor.png" alt="AVIXO" fill className="object-contain" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4 leading-tight">
                Liên hệ<br />với AVIXO
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn trong hành trình đầu tư.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-zinc-500">
              <span>📧 support@avixo.io</span>
              <span>📞 +84 (0) 123 456 789</span>
              <span>🕐 Thứ 2 – Thứ 7: 8:00 – 18:00</span>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white p-10 md:p-14">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full gap-4 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#37C0FF]/10 flex items-center justify-center">
                  <Send size={28} className="text-[#37C0FF]" />
                </div>
                <h3 className="text-xl font-black text-zinc-900">Gửi thành công!</h3>
                <p className="text-sm text-zinc-500">Chúng tôi sẽ liên hệ lại trong vòng 24 giờ.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-black text-zinc-900 mb-1">Gửi tin nhắn</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-zinc-500">Họ và tên</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Nguyễn Văn A"
                      className="border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-[#37C0FF] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-zinc-500">Số điện thoại</label>
                    <input
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="0912 345 678"
                      className="border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-[#37C0FF] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-zinc-500">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="email@example.com"
                    className="border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-[#37C0FF] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-zinc-500">Nội dung</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tôi muốn tìm hiểu về..."
                    className="border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-[#37C0FF] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#37C0FF] hover:bg-[#1aaee8] text-white font-bold rounded-xl py-3 text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  Gửi ngay <Send size={15} />
                </button>
              </form>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
