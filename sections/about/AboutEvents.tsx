"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { aboutEvents as events } from "@/lib/constants";

export function AboutEvents() {
  return (
    <section className="w-full bg-[#F8FAFC] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-3">Sự kiện nổi bật</h2>
            <p className="text-zinc-500 max-w-lg">Những dấu ấn quan trọng trong hành trình phát triển của AVIXO và cộng đồng đầu tư.</p>
          </div>
          <button className="inline-flex items-center gap-2 text-[#37C0FF] font-semibold text-sm hover:gap-3 transition-all">
            Xem thêm <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-zinc-900 rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Bg image with dark overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
                style={{ backgroundImage: `url('${ev.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-zinc-900/40" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col gap-5 min-h-[260px]">
                {/* Tag */}
                <span className={`self-start text-xs font-bold px-3 py-1 rounded-full ${ev.tag === "Upcoming" ? "bg-[#37C0FF]/20 text-[#37C0FF]" : "bg-white/10 text-zinc-300"}`}>
                  {ev.tag}
                </span>

                {/* Meta */}
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <CalendarDays size={13} className="text-zinc-500" />
                    {ev.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <MapPin size={13} className="text-zinc-500" />
                    {ev.location}
                  </span>
                </div>

                {/* Title & desc */}
                <div>
                  <h3 className="text-xl font-black text-white mb-3">{ev.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{ev.desc}</p>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-[#37C0FF] text-sm font-semibold group-hover:gap-3 transition-all">
                    Xem chi tiết <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
