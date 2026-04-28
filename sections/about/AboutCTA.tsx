"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useContactModal } from "@/components/common/contact-context";

export function AboutCTA() {
  const { open } = useContactModal();

  return (
    <section className="w-full bg-zinc-950 py-24 overflow-hidden relative">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-[#37C0FF]/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Bắt đầu hành trình<br />
              cùng{" "}
              <span className="bg-gradient-to-r from-[#37C0FF] to-[#7EE8FF] bg-clip-text text-transparent">
                AVIXO
              </span>
            </h2>
            <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
              Tham gia cùng 63,000+ nhà đầu tư đang tin tưởng AVIXO. Hệ sinh thái công nghệ tài chính tiên phong — nơi dữ liệu và AI tạo ra giá trị thực.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={open}
              className="inline-flex items-center gap-2 bg-[#37C0FF] hover:bg-[#1aaee8] text-white font-bold px-8 py-3.5 rounded-full transition-colors"
            >
              Liên hệ ngay <ArrowRight size={16} />
            </button>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              <MessageCircle size={16} /> Telegram cộng đồng
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mt-4 border-t border-zinc-800 pt-8 w-full">
            {[
              { value: "63K+", label: "Nhà đầu tư" },
              { value: "500+", label: "Đối tác IB" },
              { value: "20+", label: "Quốc gia" },
              { value: "6+", label: "Sản phẩm" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-black text-white">{s.value}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
