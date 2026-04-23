"use client";

import { motion } from "framer-motion";

export function StrategicSolutions() {
  const bots = [
    {
      type: "FULL AUTO BOT",
      name: "AUTO BMR & SMN MGH Pro",
      badges: ["PAMM/MAM", "Copy Trade", "Low DD"],
      isActive: false
    },
    {
      type: "SEMI BOT",
      typeColor: "text-green-700 bg-green-100",
      name: "Semi Boomerang & Smart Money",
      desc: "Chiến lược hồi giá kết hợp tư duy Smart Money / Liquidity / Order Flow. Công cụ hỗ trợ phân tích vùng cung-cầu, BOS, CHoCH — nhà đầu tư chủ động quyết định lệnh.",
      badges: ["Order flow", "Mean Reversion", "Intraday"],
      isActive: true,
      button: "Tìm hiểu ngay"
    },
    {
      type: "FULL AUTO BOT",
      name: "Arrow Big Trend & AI Trading Swing",
      badges: ["AI-powered", "Swing", "Position"],
      isActive: false
    }
  ];

  return (
    <section className="w-full py-32 bg-white flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 border border-zinc-200 rounded-[40px] p-12 relative overflow-hidden"
        >
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-32 h-full bg-[#00b4ff] rounded-l-[100px] opacity-[0.03]"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Giải pháp chiến lược
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-500">
            Các thuật toán được tinh chỉnh qua 15 năm thực chiến trên thị trường quốc tế.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {bots.map((bot, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex-1 flex flex-col items-center text-center p-8 rounded-3xl border transition-all ${
                bot.isActive 
                  ? 'bg-white shadow-[0_20px_60px_rgb(0,0,0,0.08)] border-zinc-200 scale-105 z-10' 
                  : 'bg-zinc-50 border-zinc-100 opacity-80 hover:opacity-100'
              }`}
            >
              <div className={`text-xs font-bold px-3 py-1 rounded-full mb-8 ${
                bot.typeColor || 'text-orange-700 bg-orange-100'
              }`}>
                ✦ {bot.type}
              </div>

              {/* Bot Network Placeholder */}
              <div className="relative w-full aspect-[4/3] mb-8 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded shadow-md border flex items-center justify-center z-10">
                  <span className="text-[#00b4ff] font-bold italic text-xl">AX</span>
                </div>
                {/* Lines and badges */}
                <svg className="absolute inset-0 w-full h-full -z-0" viewBox="0 0 100 100">
                  <line x1="50" y1="50" x2="20" y2="20" stroke="#e5e5e5" strokeWidth="1" />
                  <line x1="50" y1="50" x2="80" y2="20" stroke="#e5e5e5" strokeWidth="1" />
                  <line x1="50" y1="50" x2="20" y2="80" stroke="#e5e5e5" strokeWidth="1" />
                  <line x1="50" y1="50" x2="80" y2="80" stroke="#e5e5e5" strokeWidth="1" />
                </svg>
                {bot.badges.map((badge, i) => (
                  <div key={i} className={`absolute text-[10px] px-2 py-0.5 bg-white border rounded-full whitespace-nowrap ${
                    i === 0 ? 'top-[10%] left-[10%]' : i === 1 ? 'top-[10%] right-[10%]' : 'bottom-[20%] left-[20%]'
                  }`}>
                    {badge}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">{bot.name}</h3>
              
              {bot.desc && (
                <p className="text-sm text-zinc-500 mb-8">{bot.desc}</p>
              )}

              {bot.button && (
                <button className="mt-auto bg-[#00b4ff] hover:bg-[#0090cc] text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  {bot.button}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
