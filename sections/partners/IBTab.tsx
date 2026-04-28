"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LayoutGrid,
  Users,
  TrendingUp,
  Share2,
  Database,
  Cpu,
  BrainCircuit,
  LineChart,
  GraduationCap,
} from "lucide-react";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";
import Image from "next/image";

/* ── Section 1: hero cards ── */
const highlights = [
  {
    Icon: Globe,
    title: "Kết nối toàn cầu",
    desc: "Kết nối cộng đồng IB Việt Nam với thị trường tài chính toàn cầu thông qua các tiêu chuẩn vận hành quốc tế.",
  },
  {
    Icon: LayoutGrid,
    title: "Nền tảng hội tụ",
    desc: "Sự kết hợp hoàn hảo giữa Quant Trading Technology, hệ thống Traffic mạnh mẽ và Strategic Network chiều sâu.",
  },
  {
    Icon: Users,
    title: "Quy mô ấn tượng",
    desc: "Gia nhập hệ sinh thái với hơn 63K+ trader và mạng lưới IB tinh hoa trên toàn thế giới.",
  },
];

/* ── Section 2: value grid ── */
const values = [
  {
    Icon: TrendingUp,
    title: "Growth Architect",
    desc: "Thiết kế lộ trình tăng trưởng dài hạn cho hệ thống khách hàng của bạn với các công cụ quản trị tiên tiến.",
  },
  {
    Icon: Share2,
    title: "Community Builder",
    desc: "Xây dựng và duy trì cộng đồng nhà đầu tư bền vững dựa trên giá trị thực và kiến thức chuyên sâu.",
  },
  {
    Icon: Database,
    title: "Traffic & System Development",
    desc: "Phát triển traffic và hệ thống khách hàng quy mô lớn nhờ hạ tầng công nghệ AVIXO..",
  },
  {
    Icon: Globe,
    title: "63K+ Global IB Network",
    desc: "Trở thành một phần của mạng lưới IB toàn cầu tinh anh tại AVIXO.",
  },
];

/* ── Section 3: toolset ── */
const tools = [
  {
    Icon: Cpu,
    title: "Semi-auto",
    desc: "Công cụ hỗ trợ phân tích chủ động, giúp nhà đầu tư ra quyết định chính xác hơn.",
  },
  {
    Icon: BrainCircuit,
    title: "Auto Bot",
    desc: "Giải pháp giao dịch tự động hoàn toàn với hiệu suất cao và ổn định.",
  },
  {
    Icon: LineChart,
    title: "AI Swing Bot",
    desc: "Thuật toán AI tối ưu hóa lợi nhuận theo xu hướng thị trường trung hạn.",
  },
  {
    Icon: GraduationCap,
    title: "Coaching cá nhân hóa",
    desc: "Làm việc trực tiếp cùng chuyên gia để tinh chỉnh hệ thống giao dịch của riêng bạn.",
  },
];

export function IBTab() {
  return (
    <div className="w-full">

      {/* ── Section 1: Heading + 3 hex cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pb-12 mb-12 border-b border-zinc-100"
      >
        <Text as="h2" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          AVIXO phục vụ cộng đồng IB toàn cầu
        </Text>
        <p className="text-zinc-500 text-base max-w-2xl mx-auto leading-relaxed">
          Nền tảng hội tụ công nghệ Quant Trading, hệ thống traffic và mạng lưới
          chiến lược để nâng tầm sự nghiệp IB của bạn..
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
        {highlights.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="flex flex-col items-center text-center px-8 pt-10 pb-10 rounded-2xl bg-white border border-zinc-100 shadow-sm"
          >
            <div
              className="w-px h-8 mb-2"
              style={{ background: "linear-gradient(to bottom, transparent, #b8dff8)" }}
            />
            <HexIcon Icon={f.Icon} uid={`ib-h-${i}`} />
            <p className="font-bold text-zinc-900 text-base mt-6 mb-2">{f.title}</p>
            <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ── Section 2: Giá trị hệ sinh thái ── */}
      <div className="relative w-full bg-white py-20 -mx-6 px-6 md:px-12 overflow-hidden">
        {/* Corner decoration top-right */}
        <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-70">
          <Image src="/images/bg_solution_tab.png" alt="" fill className="object-contain object-top-right" />
        </div>
        {/* Corner decoration bottom-left (rotated) */}
        <div className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none opacity-70 rotate-180">
          <Image src="/images/bg_solution_tab.png" alt="" fill className="object-contain object-top-right" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Text as="h2" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
            Giá trị hệ sinh thái cho IB
          </Text>
          <p className="text-zinc-500 text-base max-w-xl mx-auto leading-relaxed">
            Định vị vai trò và tối ưu hóa lợi thế cạnh tranh của bạn trong thị trường tài chính hiện đại.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-3 bg-white border border-zinc-100 rounded-2xl px-7 py-7 shadow-sm"
            >
              <v.Icon size={28} className="text-[#37C0FF]" strokeWidth={1.6} />
              <p className="font-bold text-zinc-900 text-base leading-snug">{v.title}</p>
              <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Section 3: IB Solution Toolset ── */}
      <div className="relative w-full bg-white py-20 -mx-6 px-6 md:px-12 overflow-hidden border-t border-zinc-100">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-40 h-40 pointer-events-none opacity-70 rotate-90">
          <Image src="/images/bg_solution_tab.png" alt="" fill className="object-contain object-top-right" />
        </div>
        <div className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none opacity-70 -rotate-90">
          <Image src="/images/bg_solution_tab.png" alt="" fill className="object-contain object-top-right" />
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none opacity-70 rotate-180">
          <Image src="/images/bg_solution_tab.png" alt="" fill className="object-contain object-top-right" />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-2">
              IB Solution Toolset
            </p>
            <Text as="h2" className="text-3xl md:text-4xl font-bold leading-tight mb-5">
              <span className="text-zinc-900">Hệ thống phễu</span>
              <br />
              <span className="bg-gradient-to-r from-[#37C0FF] to-[#0076FF] bg-clip-text text-transparent">
                &amp; Công cụ
              </span>
            </Text>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xs">
              Cung cấp kho vũ khí công nghệ để IB chăm sóc khách hàng và tối ưu tỷ lệ
              chuyển đổi hiệu quả nhất.
            </p>
            <Button href="/contact">Liên hệ hợp tác IB</Button>
          </motion.div>

          {/* Right — tool list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 flex flex-col gap-4"
          >
            {tools.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white border border-zinc-100 rounded-2xl px-5 py-4 shadow-sm"
              >
                {/* Circular icon */}
                <div className="shrink-0 relative w-12 h-12">
                  <div className="absolute inset-0 rounded-full border border-[#c8e8f8]" />
                  <div className="absolute inset-1.5 rounded-full border border-[#daeefa] bg-[#f0f8ff] flex items-center justify-center">
                    <t.Icon size={18} className="text-[#37C0FF]" strokeWidth={1.7} />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-zinc-900 text-sm mb-1">{t.title}</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  );
}

function HexIcon({ Icon, uid }: { Icon: React.ElementType; uid: string }) {
  const shadowId = `${uid}-shadow`;
  const gradId = `${uid}-grad`;
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full" fill="none">
        <defs>
          <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#c8d8e8" floodOpacity="0.35" />
          </filter>
          <linearGradient id={gradId} x1="50" y1="2" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="50,2 98,27 98,88 50,113 2,88 2,27" fill="white" stroke="#e4eaf2" strokeWidth="1.5" filter={`url(#${shadowId})`} />
        <polygon points="50,2 98,27 98,50 50,50 2,50 2,27" fill={`url(#${gradId})`} opacity="0.2" />
        <line x1="50" y1="2" x2="28" y2="14" stroke="#d0e4f4" strokeWidth="1" strokeLinecap="round" />
        <line x1="50" y1="2" x2="72" y2="14" stroke="#d0e4f4" strokeWidth="1" strokeLinecap="round" />
      </svg>
      <div className="relative z-10 w-11 h-11 rounded-full bg-[#EBF6FF] flex items-center justify-center">
        <Icon size={22} className="text-[#37C0FF]" strokeWidth={1.8} />
      </div>
    </div>
  );
}
