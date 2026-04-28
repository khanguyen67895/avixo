"use client";

import { motion } from "framer-motion";
import { Crosshair, BrainCircuit, Headphones } from "lucide-react";
import Text from "@/components/ui/label";

const features = [
  {
    Icon: Crosshair,
    title: "Phân tích Real-time",
    desc: "Công cụ công nghệ cao giúp phân tích thị trường, hiệu suất và quản trị rủi ro ngay lập tức theo thời gian thực (Real-time).",
  },
  {
    Icon: BrainCircuit,
    title: "Tư duy Chuyên nghiệp",
    desc: "Chương trình đào tạo tư duy đầu tư chuyên nghiệp, giúp nhà đầu tư cá nhân tiếp cận các chiến lược của các quỹ lớn.",
  },
  {
    Icon: Headphones,
    title: "Hỗ trợ AI & Chuyên gia",
    desc: "Sự kết hợp hoàn hảo giữa trí tuệ nhân tạo và kinh nghiệm thực chiến từ các chuyên gia tài chính hàng đầu.",
  },
];

export function InvestorTab() {
  return (
    <div className="w-full">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pb-12 mb-12 border-b border-zinc-100"
      >
        <Text as="h2" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          Nhà đầu tư được gì từ AVIXO?
        </Text>
        <p className="text-zinc-500 text-base max-w-2xl mx-auto leading-relaxed">
          Phục vụ nhà đầu tư cá nhân với độ chính xác lượng tử, tối ưu hóa lợi nhuận
          thông qua phân tích dữ liệu thời gian thực và quản trị rủi ro tự động.
        </p>
      </motion.div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative flex flex-col items-center text-center px-8 pt-10 pb-10 rounded-2xl bg-white border border-zinc-100 shadow-sm"
          >
            {/* Light beam above hex */}
            <div
              className="w-px h-8 mb-2 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, #b8dff8)" }}
            />
            <HexIcon Icon={f.Icon} uid={`hex-${i}`} />
            <p className="font-bold text-zinc-900 text-base mt-6 mb-2">{f.title}</p>
            <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function HexIcon({ Icon, uid }: { Icon: React.ElementType; uid: string }) {
  const shadowId = `${uid}-shadow`;
  const gradId = `${uid}-grad`;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg
        viewBox="0 0 100 115"
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#c8d8e8" floodOpacity="0.35" />
          </filter>
          <linearGradient id={gradId} x1="50" y1="2" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points="50,2 98,27 98,88 50,113 2,88 2,27"
          fill="white"
          stroke="#e4eaf2"
          strokeWidth="1.5"
          filter={`url(#${shadowId})`}
        />
        <polygon
          points="50,2 98,27 98,50 50,50 2,50 2,27"
          fill={`url(#${gradId})`}
          opacity="0.2"
        />
        <line x1="50" y1="2" x2="28" y2="14" stroke="#d0e4f4" strokeWidth="1" strokeLinecap="round" />
        <line x1="50" y1="2" x2="72" y2="14" stroke="#d0e4f4" strokeWidth="1" strokeLinecap="round" />
      </svg>

      <div className="relative z-10 w-11 h-11 rounded-full bg-[#EBF6FF] flex items-center justify-center">
        <Icon size={22} className="text-[#37C0FF]" strokeWidth={1.8} />
      </div>
    </div>
  );
}
