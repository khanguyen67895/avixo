"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const founders = [
  {
    img: "/images/ic_profile1.png",
    badge: "Founder · AI & Trading Strategy",
    name: "Nguyễn Tiến Dũng",
    role: "Chief AI & Trading Strategist",
    desc: "15 năm thực chiến Forex, Gold, Crypto, hàng hóa. Kiến tạo hệ sinh thái giao dịch định lượng cho 63K+ khách hàng. Người đứng sau các thuật toán lõi của AVIXO.",
    stats: [{ value: "63K+", label: "Khách hàng" }, { value: "15+", label: "Năm kinh nghiệm" }],
  },
  {
    img: "/images/ic_profile2.png",
    badge: "Founder · IB Global Network",
    name: "Nguyễn Quang Việt",
    role: "Chief Network & Growth Officer",
    desc: "Nhà sáng lập Interlink Community. Chuyên gia phát triển traffic và hệ thống IB quy mô lớn. Xây dựng mạng lưới đối tác toàn cầu cho AVIXO.",
    stats: [{ value: "500+", label: "Đối tác IB" }, { value: "20+", label: "Quốc gia" }],
  },
  {
    img: "/images/ic_profile3.png",
    badge: "Founder · Strategic Network & Partnership",
    name: "Trần Đại Nghĩa",
    role: "Strategic Partner & Ecosystem Developer",
    desc: "Chuyên gia kết nối nhà đầu tư và đối tác chiến lược. Kinh nghiệm xây dựng network đầu tư và hệ sinh thái tài chính. Mở rộng quan hệ đối tác quốc tế tại AVIXO.\nMạng lưới nhà đầu tư, đối tác sàn và nguồn vốn chiến lược — lợi thế cạnh tranh dài hạn của AVIXO.",
    stats: [{ value: "200+", label: "Đối tác và tổ chức" }, { value: "15+", label: "Quốc gia hiện diện" }],
  },
];

export function AboutFounders() {
  const [active, setActive] = useState(2);

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-3">Đội ngũ sáng lập</h2>
          <p className="text-zinc-400">Ba Founders — ba thế mạnh bổ trợ nhau — một hệ sinh thái không thể sao chép.</p>
        </div>

        {/* Founders display */}
        <div className="relative flex items-end justify-center gap-0 min-h-[520px]">

          {/* Side founders */}
          {founders.map((f, i) => {
            if (i === active) return null;
            const isLeft = i < active;
            return (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`absolute bottom-0 ${isLeft ? "left-0 md:left-8" : "right-0 md:right-8"} w-36 md:w-48 cursor-pointer`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full aspect-[3/4]">
                  <Image src={f.img} alt={f.name} fill className="object-contain object-bottom opacity-60 hover:opacity-80 transition-opacity" />
                </div>
              </motion.button>
            );
          })}

          {/* Active founder card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 flex flex-col md:flex-row items-end gap-0 w-full max-w-2xl"
            >
              {/* Avatar */}
              <div className="relative w-56 md:w-72 h-80 md:h-96 shrink-0">
                <Image src={founders[active].img} alt={founders[active].name} fill className="object-contain object-bottom drop-shadow-xl" />
              </div>

              {/* Info card */}
              <div className="flex-1 bg-white border border-zinc-100 rounded-3xl shadow-lg p-7 mb-4 ml-0 md:-ml-8">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#FFF3E0] text-[#E65100] mb-4">
                  {founders[active].badge}
                </span>
                <h3 className="text-2xl font-black text-zinc-900 mb-1">{founders[active].name}</h3>
                <p className="text-sm font-semibold text-[#37C0FF] mb-4">{founders[active].role}</p>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6 whitespace-pre-line">{founders[active].desc}</p>
                <div className="flex gap-8">
                  {founders[active].stats.map((s, i) => (
                    <div key={i}>
                      <p className="text-2xl font-black text-[#37C0FF]">{s.value}</p>
                      <p className="text-xs text-zinc-400">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {founders.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-[#37C0FF] w-6" : "bg-zinc-200"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
