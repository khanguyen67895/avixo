"use client";

import { motion } from "framer-motion";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";
import { useT } from "@/lib/i18n";

export function CTA() {
  const t = useT();
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
          <Text as="h2" className="text-4xl md:text-5xl tracking-tight text-white mb-6">
            {t("Tham gia hệ sinh thái")} <br className="hidden sm:block" />
            <span className="text-[#00b4ff]">AVIXO</span> {t("AVIXO hôm nay").replace("AVIXO ", "")}
          </Text>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-[18px] mb-10"
        >
          {t("Bắt đầu hành trình đầu tư thông minh và chuyên nghiệp cùng công nghệ dẫn đầu.")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" href="/about">{t("Khám phá AVIXO ngay")}</Button>
          <Button variant="outline" href="/partners?tab=investor">{t("Hồ sơ nhà đầu tư")}</Button>
        </motion.div>
      </div>
    </section>
  );
}
