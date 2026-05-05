"use client";

import { motion } from "framer-motion";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";

interface CTAProps {
  title?: string;
  titleButtonLeft?: string;
  titleButtonRight?: string;
  hrefButtonLeft?: string;
  hrefButtonRight?: string;
} 

export function CTA({ title, titleButtonLeft, titleButtonRight, hrefButtonLeft, hrefButtonRight }: CTAProps) {
  return (
    <section className="relative w-full py-24 bg-linear-to-b from-[#0D103E] to-[#08112B] flex flex-col items-center border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] bg-size-[24px_24px] opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-7 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Text as="h2" className="text-[36px] md:text-[56px] tracking-tight text-white mb-6">
            {/* Sẵn sàng để tối ưu hóa <br /> danh mục đầu tư? */}
            {title}
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" href={hrefButtonLeft}>{titleButtonLeft}</Button>
          <Button variant="outline" href={hrefButtonRight}>{titleButtonRight}</Button>
        </motion.div>
      </div>
    </section>
  );
}
