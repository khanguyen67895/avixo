"use client";

import { motion } from "framer-motion";
import { useContactModal } from "@/components/common/contact-context";

export function TrackCTA() {
  const { open } = useContactModal();

  return (
    <section className="w-full bg-[#060d18] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Tham gia hệ sinh thái<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#37C0FF] to-[#0076FF]">AVIXO</span>{" "}
            hôm nay
          </h2>
          <p className="text-zinc-400 text-base mb-10 max-w-xl mx-auto">
            Trở thành một phần của hệ sinh thái đầu tư minh bạch, được xây dựng trên dữ liệu thực và công nghệ tiên tiến.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#37C0FF] to-[#0076FF] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(55,192,255,0.35)]">
              Khám phá AVIXO
            </button>
            <button
              onClick={open}
              className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              Liên hệ đầu tư
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
