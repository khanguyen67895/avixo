"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* CTA Section */}
      <section className="relative w-full py-24 bg-[#050b14] flex flex-col items-center border-t border-white/5 overflow-hidden">
        {/* Dotted background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Tham gia hệ sinh thái <br className="hidden sm:block" />
            <span className="text-[#00b4ff]">AVIXO</span> hôm nay
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#8ba3c7] text-lg mb-10"
          >
            Bắt đầu hành trình đầu tư thông minh và chuyên nghiệp cùng công nghệ dẫn đầu.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/explore"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#00b4ff] hover:bg-[#0090cc] text-white font-semibold transition-all hover:scale-105 active:scale-95"
            >
              Khám phá AVIXO ngay
            </Link>
            <Link
              href="/investors"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-transparent border border-white/20 hover:border-white/40 text-white font-semibold transition-all hover:scale-105 active:scale-95"
            >
              Hồ sơ nhà đầu tư
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Footer Links */}
      <section className="w-full py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-12">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col justify-between max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-12 md:mb-0">
              <img src="/images/logo-avixo.png" alt="AVIXO Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-zinc-500 text-sm hidden md:block">
              © 2024 AVIXO Capital Management. All rights reserved.
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-lg mb-2">Giải pháp</h4>
              <Link href="/nha-dau-tu" className="text-zinc-400 hover:text-[#00b4ff] text-sm transition-colors">Nhà đầu tư</Link>
              <Link href="/cong-dong-ib" className="text-zinc-400 hover:text-[#00b4ff] text-sm transition-colors">Cộng đồng IB</Link>
              <Link href="/doi-tac" className="text-zinc-400 hover:text-[#00b4ff] text-sm transition-colors">Đối tác chiến lược</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-lg mb-2">Sản phẩm</h4>
              <Link href="/semi-bot" className="text-zinc-400 hover:text-[#00b4ff] text-sm transition-colors">SEMI - BOT</Link>
              <Link href="/full-auto-bot" className="text-zinc-400 hover:text-[#00b4ff] text-sm transition-colors">FULL - AUTO BOT</Link>
              <Link href="/ai-coaching" className="text-zinc-400 hover:text-[#00b4ff] text-sm transition-colors">AI Coaching</Link>
            </div>

            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h4 className="text-white font-bold text-lg mb-2">Pháp lý</h4>
              <Link href="/legal" className="text-zinc-400 hover:text-[#00b4ff] text-sm transition-colors">Legal Policy</Link>
              <Link href="/privacy" className="text-zinc-400 hover:text-[#00b4ff] text-sm transition-colors">Privacy</Link>
              <Link href="/contact" className="text-zinc-400 hover:text-[#00b4ff] text-sm transition-colors">Liên hệ</Link>
            </div>
          </div>
          
          <p className="text-zinc-500 text-sm md:hidden mt-8">
            © 2024 AVIXO Capital Management. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
