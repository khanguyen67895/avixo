"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";

const items = [
  "AVIXO cung cấp các công cụ hỗ trợ và giải pháp công nghệ, không phải là đơn vị tư vấn tài chính được cấp phép cá nhân. Mọi quyết định là của người dùng.",
  "Kết quả trong quá khứ không phải là sự đảm bảo cho lợi nhuận trong tương lai. Thị trường luôn có những yếu tố bất ngờ.",
  "Người dùng bắt buộc phải đánh giá khả năng chịu đựng rủi ro và tình hình tài chính cá nhân trước khi tham gia bất kỳ hệ thống giao dịch nào.",
  "Các chỉ số quan trọng như Drawdown (mức sụt giảm tài khoản) và lợi nhuận trung bình hàng năm phải được xem xét kỹ lưỡng trong phần Track Record.",
];

export function RiskDisclaimer() {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* Decorative glass objects — left side */}
      <div className="absolute left-0 bottom-10 w-32 md:w-48 pointer-events-none opacity-70 hidden lg:block">
        <Image
          src="/images/ic_phone1.png"
          alt=""
          width={180}
          height={380}
          className="object-contain"
        />
      </div>
      <div className="absolute left-20 bottom-24 w-12 md:w-16 pointer-events-none opacity-50 hidden lg:block">
        <Image
          src="/images/ic_earth.png"
          alt=""
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[32px] border border-zinc-100 shadow-[0_4px_40px_rgba(0,0,0,0.06)] px-8 md:px-14 py-12"
        >
          {/* Heading */}
          <div className="text-center mb-4">
            <Text as="h2" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3 leading-snug">
              Những gì cần hiểu trước khi sử dụng
            </Text>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xl mx-auto">
              Tại AVIXO, chúng tôi ưu tiên sự minh bạch và trách nhiệm. Đầu tư tài chính
              luôn đi kèm với những biến động không lường trước được.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-8" />

          {/* Risk items */}
          <div className="flex flex-col gap-4">
            {items.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 items-start bg-[#F8FAFC] rounded-2xl px-6 py-5"
              >
                <span className="shrink-0 w-8 h-8 rounded-full bg-white border border-zinc-100 shadow-sm flex items-center justify-center text-xs font-bold text-[#37C0FF]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-zinc-600 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom confirmation */}
          <div className="mt-10 text-center">
            <p className="text-xs tracking-widest text-zinc-400 uppercase font-medium">
              Vui lòng xác nhận bạn đã hiểu các rủi ro trên
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
