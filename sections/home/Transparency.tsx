"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export function Transparency() {
  return (
    <section className="w-full py-24 bg-white flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#050b14] rounded-[40px] p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Dotted Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Minh bạch là nền tảng của<br />mọi niềm tin
            </h2>
            
            <p className="text-[#8ba3c7] text-lg mb-12 max-w-2xl mx-auto">
              Tại AVIXO, chúng tôi cam kết cung cấp dữ liệu xác thực, được kiểm chứng qua các nền tảng Myfxbook công khai. Mọi thuật toán đều dựa trên logic toán học, không phải phỏng đoán.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00b4ff]" />
                <span className="text-white font-semibold text-lg">Track Record & Minh bạch</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#00b4ff]" />
                <span className="text-white font-semibold text-lg">Pháp lý & cam kết</span>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
