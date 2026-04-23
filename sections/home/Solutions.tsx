"use client";

import { motion } from "framer-motion";
import { Circle, Network, Handshake } from "lucide-react";
import Text from "@/components/ui/label";

export function Solutions() {
  const cards = [
    {
      title: "Nhà đầu tư",
      description: "Công cụ quản lý danh mục tự động và AI coaching dành cho tài khoản cá nhân.",
      buttonText: "Bắt đầu",
      icon: <Circle className="w-16 h-16 text-[#00b4ff] mb-6" strokeWidth={1} />, // Placeholder for 3D interlocking rings
    },
    {
      title: "Cộng đồng IB",
      description: "Nền tảng hạ tầng và công cụ hỗ trợ phát triển hệ thống khách hàng toàn cầu.",
      buttonText: "Tìm hiểu",
      icon: <Network className="w-16 h-16 text-[#00e5ff] mb-6" strokeWidth={1} />, // Placeholder for 3D network node
    },
    {
      title: "Đối tác chiến lược",
      description: "Hợp tác cung cấp thanh khoản và phát triển giải pháp Quant Technology độc bản.",
      buttonText: "Hợp tác",
      icon: <Handshake className="w-16 h-16 text-[#00b4ff] mb-6" strokeWidth={1} />, // Placeholder for 3D handshake
    },
  ];

  return (
    <section className="relative w-full py-32 bg-[#ffffff] flex flex-col items-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 top-20"
        style={{ backgroundImage: "url('/images/bg_grid.png')" }}
      ></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Text className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
            Giải pháp cho mọi đối tác
          </Text>
          <p className="max-w-2xl mx-auto text-lg text-zinc-600">
            AVIXO là hệ sinh thái toàn diện nơi công nghệ, dữ liệu và con người cùng tạo giá trị dài hạn trên Forex, Gold, Crypto, Chứng khoán và Hàng hóa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 flex flex-col items-center text-center relative overflow-hidden group"
            >
              {/* Subtle hover glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#00b4ff]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center h-full">
                {card.icon}
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{card.title}</h3>
                <p className="text-zinc-500 mb-8 flex-1">{card.description}</p>
                <button className="w-full py-3 px-6 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-medium transition-colors">
                  {card.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
