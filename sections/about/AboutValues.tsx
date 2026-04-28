"use client";

import { motion } from "framer-motion";
import { Cpu, Brain, User, RefreshCw } from "lucide-react";

const values = [
  {
    Icon: Cpu,
    title: "Data & AI First",
    desc: "Mọi quyết định đều dựa trên phân tích dữ liệu thực và trí tuệ nhân tạo, loại bỏ yếu tố cảm xúc trong giao dịch.",
  },
  {
    Icon: Brain,
    title: "Minh bạch tuyệt đối",
    desc: "Sự tin cậy được xây dựng từ hệ thống báo cáo và dữ liệu công khai, trung thực.",
  },
  {
    Icon: User,
    title: "Con người làm chủ",
    desc: "Lấy con người làm trung tâm của mọi sự phát triển và giá trị tạo ra. Công nghệ hỗ trợ cho nhà đầu tư quyết định cuối cùng.",
  },
  {
    Icon: RefreshCw,
    title: "Bền vững dài hạn",
    desc: "Chúng tôi không tìm kiếm lợi nhuận tức thời, mà tập trung vào sự phát triển ổn định kiểm soát rủi ro.",
  },
];

export function AboutValues() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-80 shrink-0"
          >
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight mb-6">
              Giá trị cốt lõi<br />tại AVIXO
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed">
              AVIXO vận hành như một đơn vị cung cấp giải pháp và công cụ công nghệ giao dịch tiên tiến. Chúng tôi khẳng định:
            </p>
          </motion.div>

          {/* Right */}
          <div className="flex-1 flex flex-col gap-4">
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <div className="w-9 h-9 rounded-full bg-[#EBF5FF] flex items-center justify-center">
                    <Icon size={18} className="text-[#37C0FF]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">{title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
