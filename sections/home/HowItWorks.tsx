"use client";

import { motion } from "framer-motion";
import { Cpu, Brain, Globe } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="w-full py-32 bg-[#fafafa] flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
            Phương thức hoạt động của AVIXO
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-zinc-600">
            Chúng tôi không chỉ cung cấp công cụ, chúng tôi xây dựng một nền tảng tư duy và công nghệ bền vững cho sự thịnh vượng tài chính toàn cầu.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: 3D Visual Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative"
          >
            <div className="aspect-square max-w-[500px] mx-auto bg-white rounded-[40px] shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-zinc-100 flex items-center justify-center p-8 relative overflow-hidden">
              {/* Fake 3D Glass Circuit Board Effect */}
              <div className="w-full h-full bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-3xl relative flex items-center justify-center border border-white shadow-inner">
                {/* Simulated Globe inside Glass */}
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#00b4ff]/20 to-[#0055ff]/40 shadow-xl border border-white/50 backdrop-blur-md flex items-center justify-center">
                  <Globe className="w-24 h-24 text-[#0055ff] opacity-50" />
                </div>
                {/* Pins */}
                <div className="absolute top-[20%] left-[20%] w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center shadow-lg backdrop-blur-sm"><div className="w-2 h-2 rounded-full bg-blue-500"></div></div>
                <div className="absolute bottom-[30%] left-[15%] w-8 h-8 rounded-full bg-orange-500/20 border-2 border-orange-400 flex items-center justify-center shadow-lg backdrop-blur-sm"><div className="w-2 h-2 rounded-full bg-orange-500"></div></div>
                <div className="absolute top-[30%] right-[20%] w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center shadow-lg backdrop-blur-sm"><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content List */}
          <div className="flex-1 w-full flex flex-col gap-12 relative">
            
            {/* Steps / Features */}
            {[
              { icon: <Cpu className="w-6 h-6 text-[#00b4ff]" />, title: "Thuật toán tối ưu", desc: "Tự động hóa giao dịch với độ trễ thấp nhất." },
              { icon: <Brain className="w-6 h-6 text-[#00b4ff]" />, title: "Trí tuệ nhân tạo", desc: "Phân tích dữ liệu lịch sử và hành vi thị trường theo thời gian thực." },
              { icon: <Globe className="w-6 h-6 text-[#00b4ff]" />, title: "Phát triển mạng lưới IB Global", desc: "Xây dựng hệ sinh thái liên kết toàn cầu, hỗ trợ các đối tác phát triển bền vững dựa trên giá trị thực và tính minh bạch tuyệt đối.", isActive: true },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className={`flex gap-6 items-start ${!item.isActive ? 'opacity-40 grayscale' : ''}`}
              >
                <div className={`shrink-0 w-16 h-16 rounded-full flex items-center justify-center relative z-10 ${item.isActive ? 'bg-white shadow-xl border-2 border-[#00b4ff]' : 'bg-white shadow-sm border border-zinc-200'}`}>
                  {item.icon}
                </div>
                <div className="pt-2">
                  <h3 className={`text-2xl font-bold mb-3 ${item.isActive ? 'text-zinc-900' : 'text-zinc-500'}`}>{item.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Connecting line for active step (placeholder style) */}
            <div className="absolute left-8 top-16 bottom-16 w-[2px] bg-gradient-to-b from-transparent via-[#00b4ff]/30 to-transparent -z-0"></div>

          </div>
        </div>
      </div>
    </section>
  );
}
