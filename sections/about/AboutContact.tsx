"use client";

import Image from "next/image";
import { useState } from "react";
import ic_logo2 from "@/public/images/ic_logo2.png";
import Button from "@/components/ui/button";
import Text from "@/components/ui/label";
import { GlowBackground } from "@/components/common/GlowBackground";

const topics = ["Đầu tư Cá nhân", "Đối tác IB", "Đầu tư chiến lược"];

const TOPIC_TO_VALUE: Record<string, string> = {
  "Đầu tư Cá nhân": "investor",
  "Đối tác IB": "ib",
  "Đầu tư chiến lược": "strategic",
};

export function AboutContact() {
  const [topic, setTopic] = useState("Đầu tư Cá nhân");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: TOPIC_TO_VALUE[topic] || topic,
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <GlowBackground src="/images/ic_bg1.png" className="w-full pb-24 pt-56 -mt-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="flex flex-col items-center text-center gap-4">
            <Image src={ic_logo2} alt="AVIXO" className="w-56 h-56 object-contain" />
            <Text as="h2" className="text-4xl text-zinc-900">Liên hệ với AVIXO</Text>
            <p className="text-[#505050] max-w-xs">Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng sự phát triển của bạn.</p>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Text as="h3" className="text-2xl text-zinc-900">Gửi yêu cầu hỗ trợ</Text>

            {/* Topic */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-700">Chủ đề</label>
              <div className="flex flex-wrap gap-4">
                {topics.map((t) => (
                  <label key={t} className="flex items-center gap-2 cursor-pointer text-sm text-zinc-700">
                    <input
                      type="radio"
                      name="topic"
                      value={t}
                      checked={topic === t}
                      onChange={() => setTopic(t)}
                      className="accent-[#37C0FF]"
                    />
                    {t}
                  </label>
                ))}
              </div>
            </div>

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-700">Họ Và Tên</label>
              <input
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Tên của bạn"
                className="border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-[#37C0FF] transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-700">Số điện thoại</label>
              <input
                type="tel"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                placeholder="0912 345 678"
                className="border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-[#37C0FF] transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-700">Email Liên hệ</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="name@gmail.com"
                className="border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-[#37C0FF] transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-700">Nội dung</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="nội dung tin nhắn"
                className="border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-[#37C0FF] transition-colors resize-none"
              />
            </div>

            {status === "success" && (
              <p className="text-sm text-green-600 font-medium">✅ Yêu cầu đã được gửi thành công!</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 font-medium">❌ Có lỗi xảy ra, vui lòng thử lại.</p>
            )}

            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Đang gửi..." : "Gửi yêu cầu"}
            </Button>
          </form>

        </div>
      </div>
    </GlowBackground>
  );
}
