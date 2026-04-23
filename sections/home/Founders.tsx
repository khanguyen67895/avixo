"use client";

import { motion } from "framer-motion";

export function Founders() {
  const founders = [
    {
      name: "Nguyễn Tiến Dũng",
      role: "Định hướng Trading & AI",
      desc: "15 năm thực chiến Forex, Gold, Crypto, hàng hóa. Kiến tạo hệ sinh thái giao dịch cho 63K+ khách hàng.",
      avatarColor: "bg-zinc-200" // Placeholder
    },
    {
      name: "Nguyễn Quang Việt",
      role: "Xây dựng mạng lưới IB toàn cầu",
      desc: "Nhà sáng lập Interlink Community. Chuyên gia phát triển traffic và hệ thống khách hàng quy mô lớn.",
      avatarColor: "bg-blue-100" // Placeholder
    },
    {
      name: "Trần Đại Nghĩa",
      role: "Mở rộng quan hệ đối tác quốc tế",
      desc: "Chuyên gia kết nối nhà đầu tư và đối tác chiến lược. Xây dựng network đầu tư và hệ sinh thái tài chính.",
      avatarColor: "bg-orange-50" // Placeholder
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
          className="text-center mb-16 border-2 border-[#00b4ff]/30 p-12 rounded-[40px] border-dashed relative"
        >
          {/* Blue solid borders at corners simulation */}
          <div className="absolute -top-1 -left-1 w-16 h-16 border-t-4 border-l-4 border-[#00b4ff] rounded-tl-[40px]"></div>
          <div className="absolute -top-1 -right-1 w-16 h-16 border-t-4 border-r-4 border-[#00b4ff] rounded-tr-[40px]"></div>
          <div className="absolute -bottom-1 -left-1 w-16 h-16 border-b-4 border-l-4 border-[#00b4ff] rounded-bl-[40px]"></div>
          <div className="absolute -bottom-1 -right-1 w-16 h-16 border-b-4 border-r-4 border-[#00b4ff] rounded-br-[40px]"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Đội ngũ sáng lập
          </h2>
          <p className="text-zinc-500 mb-16">
            Ba Founders — ba thế mạnh bổ trợ nhau — một hệ sinh thái không thể sao chép.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                {/* 3D Avatar Placeholder */}
                <div className={`w-full aspect-square rounded-[40px] ${founder.avatarColor} mb-8 flex flex-col justify-end items-center overflow-hidden border border-zinc-100 shadow-sm relative group`}>
                  {/* Fake body/head silhouette */}
                  <div className="w-24 h-24 rounded-full bg-zinc-300 absolute top-1/4"></div>
                  <div className="w-40 h-40 rounded-t-full bg-zinc-400 absolute bottom-0 translate-y-10 group-hover:translate-y-6 transition-transform duration-500"></div>
                </div>

                <div className="text-left w-full">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{founder.name}</h3>
                  <p className="text-sm text-zinc-500 mb-6 h-20">{founder.desc}</p>
                  <div className="bg-zinc-100 text-zinc-700 text-sm font-semibold px-4 py-2 rounded-full text-center hover:bg-zinc-200 transition-colors cursor-default">
                    {founder.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
