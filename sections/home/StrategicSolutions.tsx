"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import Image from "next/image";
import Text from "@/components/ui/label";

type BadgeCfg = { label: string; bx: number; by: number; bw: number; lx: number; ly: number };

// cx=120, cy=90, r=22 → vertices: R(142,90) UR(131,71) UL(109,71) L(98,90) LL(109,109) LR(131,109)
const NETWORKS: BadgeCfg[][] = [
  [
    { label: "PAMM/MAM",   bx: 55,  by: 35,  bw: 72, lx: 109, ly: 71  },
    { label: "Copy Trade", bx: 5,   by: 148, bw: 70, lx: 109, ly: 109 },
    { label: "Low DD",     bx: 160, by: 142, bw: 58, lx: 131, ly: 109 },
  ],
  [
    { label: "Order flow",     bx: 5,   by: 90,  bw: 68, lx: 98,  ly: 90  },
    { label: "Mean Reversion", bx: 153, by: 65,  bw: 82, lx: 142, ly: 78  },
    { label: "Intraday",       bx: 5,   by: 148, bw: 60, lx: 109, ly: 109 },
  ],
  [
    { label: "AI-powered", bx: 158, by: 35,  bw: 72, lx: 131, ly: 71  },
    { label: "Swing",      bx: 5,   by: 148, bw: 52, lx: 109, ly: 109 },
    { label: "Position",   bx: 162, by: 148, bw: 62, lx: 131, ly: 109 },
  ],
];

function NetworkDiagram({ idx }: { idx: number }) {
  const cfg = NETWORKS[idx];
  const stroke = "#d1d5db";
  const bh = 22;

  return (
    <svg viewBox="0 0 240 190" className="w-full h-full">
      {cfg.map((b, i) => (
        <g key={i}>
          <rect x={b.bx} y={b.by - bh / 2} width={b.bw} height={bh} rx="11" fill="white" stroke={stroke} strokeWidth="1" />
          <text x={b.bx + b.bw / 2} y={b.by + 4} textAnchor="middle" fontSize="9" fill="#374151" fontFamily="system-ui, sans-serif">
            {b.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

const bots = [
  {
    type: "FULL AUTO BOT",
    name: "AUTO BMR & SMN MGH Pro",
    desc: "Hệ thống giao dịch tự động hoàn toàn với mô hình PAMM/MAM, copy trade và drawdown thấp, phù hợp nhà đầu tư thụ động.",
    button: "Tìm hiểu ngay",
    icon: "/images/ic_full_auto.png",
  },
  {
    type: "SEMI BOT",
    name: "Semi Boomerang & Smart Money",
    desc: "Chiến lược hồi giá kết hợp tư duy Smart Money / Liquidity / Order Flow. Công cụ hỗ trợ phân tích vùng cung-cầu, BOS, CHoCH — nhà đầu tư chủ động quyết định lệnh.",
    button: "Tìm hiểu ngay",
    icon: "/images/ic_semibot.png",
  },
  {
    type: "FULL AUTO BOT",
    name: "Arrow Big Trend & AI Trading Swing",
    desc: "Thuật toán AI phát hiện xu hướng lớn kết hợp chiến lược swing và position trading trên các thị trường quốc tế.",
    button: "Tìm hiểu ngay",
    icon: "/images/ic_full_auto2.png",
  },
];

export function StrategicSolutions() {
  const [activeIdx, setActiveIdx] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const isHoveringRef = useRef(false);
  const mousePosRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const pxPerFrame = 3;
    let dist = 0;

    function posAt(d: number, W: number, H: number) {
      const P = 2 * (W + H);
      const dd = ((d % P) + P) % P;
      if (dd < W)          return { x: dd,               y: 0 };
      if (dd < W + H)      return { x: W,                y: dd - W };
      if (dd < 2 * W + H) return { x: W - (dd - W - H), y: H };
      return                      { x: 0,                y: H - (dd - 2 * W - H) };
    }

    const tick = () => {
      const el = sectionRef.current;
      const glow = glowRef.current;
      if (!el || !glow) { rafRef.current = requestAnimationFrame(tick); return; }

      const W = el.offsetWidth;
      const H = el.offsetHeight;
      const P = 2 * (W + H);

      if (isHoveringRef.current) {
        const { x, y } = mousePosRef.current;
        const mask = `radial-gradient(160px circle at ${x}px ${y}px, black 0%, transparent 100%)`;
        glow.style.maskImage = mask;
      } else {
        dist = (dist + pxPerFrame) % P;
        const p0 = posAt(dist,         W, H);
        const p1 = posAt(dist + P / 3, W, H);
        const p2 = posAt(dist + 2*P/3, W, H);
        const mask = [
          `radial-gradient(130px circle at ${p0.x}px ${p0.y}px, black 0%, transparent 100%)`,
          `radial-gradient(130px circle at ${p1.x}px ${p1.y}px, black 0%, transparent 100%)`,
          `radial-gradient(130px circle at ${p2.x}px ${p2.y}px, black 0%, transparent 100%)`,
        ].join(", ");
        glow.style.maskImage = mask;
      }

      glow.style.filter = `drop-shadow(0 0 10px #7FDEFF) drop-shadow(0 0 24px #0076FF)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pb-24 md:pb-24 overflow-hidden"
      onMouseMove={e => {
        const r = sectionRef.current!.getBoundingClientRect();
        mousePosRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
        isHoveringRef.current = true;
      }}
      onMouseLeave={() => { isHoveringRef.current = false; }}
    >
      <Image src="/images/ic_bg1.png" alt="" fill className="object-center pointer-events-none" />
      <div ref={glowRef} className="absolute inset-0 pointer-events-none">
        <Image src="/images/ic_bg1.png" alt="" fill className="object-center" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10"
        >
          <Text as="h2" className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
            Giải pháp chiến lược
          </Text>
          <p className="max-w-2xl mx-auto text-lg text-zinc-500">
            Các thuật toán được tinh chỉnh qua 15 năm thực chiến trên thị trường quốc tế.
          </p>
        </motion.div>

        {/* Cards — equal width, inactive cards vertically centered against active */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-24">
          {bots.map((bot, idx) => {
            const isActive = activeIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onHoverStart={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`relative w-full md:flex-1 flex flex-col overflow-hidden rounded-[28px] p-6 cursor-pointer transition-all ${
                  isActive
                    ? "bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)] border-2 border-zinc-300 z-10"
                    : "bg-[#F5F6F8] border-[3px] border-white"
                }`}
              >
                {/* Background decorative image */}
                {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute w-50 h-50 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(180,130,255,0.35)_0%,rgba(220,180,255,0.15)_50%,transparent_75%)]" />
                  <Image
                    src="/images/ic_bg_solution.png"
                    alt=""
                    width={240}
                    height={240}
                    className={`object-contain transition-opacity duration-300 ${isActive ? "opacity-80" : "opacity-40"}`}
                  />
                </div> */}

                {/* Badge — centered */}
                <div className="relative z-10 mb-4 flex justify-center">
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300 ${isActive ? "bg-[#4CAF50] text-[#1D1D1D]" : "bg-[#FFE1CC] text-[#1D1D1D]"}`}>
                    <Zap size={11} fill="#1D1D1D" color="#1D1D1D" /> {bot.type}
                  </span>
                </div>

                {/* Icon */}
                <div className="relative z-10 w-full flex justify-center mb-4">
                  <Image
                    src={bot.icon}
                    alt={bot.name}
                    width={280}
                    height={280}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 font-bold text-zinc-900 leading-snug text-lg mb-3">
                  {bot.name}
                </h3>

                {/* Mobile: always show content */}
                <div className="md:hidden relative z-10">
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6">{bot.desc}</p>
                  <button className="w-fit mx-auto flex bg-linear-to-r from-[#37C0FF] to-[#0090cc] hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold transition-opacity text-sm">
                    {bot.button}
                  </button>
                </div>

                {/* Desktop: expand on hover */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="hidden md:block relative z-10 overflow-hidden"
                    >
                      <p className="text-sm text-zinc-500 leading-relaxed mb-6">{bot.desc}</p>
                      <button className="w-fit mx-auto flex bg-linear-to-r from-[#37C0FF] to-[#0090cc] hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold transition-opacity text-sm">
                        {bot.button}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
