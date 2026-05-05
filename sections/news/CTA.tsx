"use client";

import { motion } from "framer-motion";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative w-full py-24 bg-linear-to-b from-[#0D103E] to-[#08112B] flex flex-col items-center border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] bg-size-[24px_24px] opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Text as="h2" className="text-4xl md:text-5xl tracking-tight text-white mb-8">
            Giữ kết nối với <br className="hidden sm:block" />
            <span className="text-[#00b4ff]">Tương lai tài chính</span>
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center w-full max-w-md mx-auto rounded-full px-2 py-1.5 border-2 border-[#EEEEEE]/26 mb-4"
        >
          <input
            type="email"
            placeholder="Email"
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/40 px-2 py-2"
          />
          <Button variant="primary" className="text-sm shrink-0 py-2! px-6!">Theo dõi</Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-[16px]"
        >
          Theo dõi nhận bản tin hàng tuần của chúng tôi để cập nhật <br /> những phân tích độc quyền và tín hiệu thị trường sớm nhất.
        </motion.p>
      </div>
    </section>
  );
}
