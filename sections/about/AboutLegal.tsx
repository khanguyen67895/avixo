"use client";

import { motion } from "framer-motion";
import { TrendingUp, Network, Globe } from "lucide-react";

const mainCards = [
  {
    Icon: TrendingUp,
    title: "Cơ sở pháp lý",
    desc: "Mọi hoạt động thương mại và vận hành của AVIXO được thực hiện dựa trên sự tuân thủ nghiêm ngặt hệ thống pháp luật hiện hành.",
  },
  {
    Icon: Network,
    title: "Quan hệ đối tác Broker",
    desc: "AVIXO thiết lập quan hệ đối tác chiến lược với các sàn giao dịch quốc tế sở hữu giấy phép uy tín (FCA, ASIC, CySEC) trong vai trò Introducing Broker (IB). Mối quan hệ này dựa trên các thỏa thuận minh bạch và được kiểm soát chặt chẽ.",
  },
];

const subCards = [
  {
    Icon: Globe,
    title: "Xác minh thực tế",
    desc: "Sẵn sàng công khai đối soát tài khoản Live đã được xác minh theo yêu cầu của đối tác và khách hàng chiến lược.",
  },
  {
    Icon: Globe,
    title: "Chỉ số rủi ro",
    desc: "Công bố chi tiết Maximum Drawdown và các tham số quản trị rủi ro cho từng dòng sản phẩm.",
  },
  {
    Icon: Globe,
    title: "Lợi nhuận trung bình",
    desc: "Báo cáo hiệu suất hàng tháng dựa trên dữ liệu lịch sử thực tế, cung cấp cái nhìn khách quan về kỳ vọng đầu tư.",
  },
];

export function AboutLegal() {
  return (
    <section className="w-full bg-[#F8FAFC] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-5">Pháp lý & minh bạch</h2>
          <p className="text-zinc-500 text-base max-w-2xl mx-auto leading-relaxed">
            AVIXO tuyệt đối không đưa ra các cam kết lợi nhuận cố định hay bảo đảm vốn dưới bất kỳ hình thức nào. Chúng tôi giáo dục người dùng về tính rủi ro của thị trường tài chính và khuyến khích sự thận trọng trong mọi quyết định.
          </p>
        </motion.div>

        {/* 2 main cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {mainCards.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-8"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                <Icon size={22} className="text-[#37C0FF]" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 3 sub cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subCards.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-6 flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-[#EBF5FF] flex items-center justify-center">
                  <Icon size={18} className="text-[#37C0FF]" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 mb-2">{title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
