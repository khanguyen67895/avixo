"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import ic_logo2 from "@/public/images/ic_logo2.png";
import Button from "@/components/ui/button";
import Text from "@/components/ui/label";
import { GlowBackground } from "@/components/common/GlowBackground";
import { useT } from "@/lib/i18n";

const topics = ["Đầu tư Cá nhân", "Đối tác IB", "Đầu tư chiến lược"];

const TOPIC_TO_VALUE: Record<string, string> = {
  "Đầu tư Cá nhân": "investor",
  "Đối tác IB": "ib",
  "Đầu tư chiến lược": "strategic",
};

export function AboutContact() {
  const t = useT();
  const [topic, setTopic] = useState("Đầu tư Cá nhân");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; message?: string }>({});

  function validate() {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = "Vui lòng nhập họ và tên";
    if (!form.phone.trim()) errs.phone = "Vui lòng nhập số điện thoại";
    else if (!/^(0\d{9}|\+84\d{9})$/.test(form.phone.replace(/\s/g, ""))) errs.phone = "Số điện thoại không hợp lệ";
    if (!form.email.trim()) errs.email = "Vui lòng nhập email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Email không hợp lệ";
    if (!form.message.trim()) errs.message = "Vui lòng nhập nội dung";
    return errs;
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setStatus("idle");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
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
    <GlowBackground src="/images/ic_bg1.png" className="w-full pb-20 mt-30">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="flex flex-col items-center text-center gap-4">
            <img src={ic_logo2.src} alt="AVIXO" className="w-56 h-56 object-contain" />
            <Text as="h2" className="text-4xl text-[#1D1D1D]">{t("Liên Hệ Với AVIXO")}</Text>
            <p className="text-[#131313] text-base max-w-xs">{t("Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng sự phát triển của bạn.")}</p>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Text as="h3" className="text-2xl font-semibold text-[#1D1D1D]">{t("Gửi Yêu Cầu Hỗ Trợ")}</Text>

            {/* Topic */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-700">{t("Chủ đề")}</label>
              <div className="flex flex-wrap gap-4">
                {topics.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm text-zinc-700">
                    <input
                      type="radio"
                      name="topic"
                      value={opt}
                      checked={topic === opt}
                      onChange={() => setTopic(opt)}
                      className="accent-[#37C0FF]"
                    />
                    {t(opt)}
                  </label>
                ))}
              </div>
            </div>

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-700">{t("Họ Và Tên")}</label>
              <input
                value={form.name}
                onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(p => ({ ...p, name: undefined })); }}
                placeholder={t("Tên của bạn")}
                className={`border rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none transition-colors ${errors.name ? "border-red-400 focus:border-red-400" : "border-zinc-200 focus:border-[#37C0FF]"}`}
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-700">{t("Số điện thoại")}</label>
              <input
                type="tel"
                value={form.phone}
                onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(p => ({ ...p, phone: undefined })); }}
                placeholder="0912 345 678"
                className={`border rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none transition-colors ${errors.phone ? "border-red-400 focus:border-red-400" : "border-zinc-200 focus:border-[#37C0FF]"}`}
              />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-700">{t("Email Liên hệ")}</label>
              <input
                type="email"
                value={form.email}
                onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(p => ({ ...p, email: undefined })); }}
                placeholder="name@gmail.com"
                className={`border rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none transition-colors ${errors.email ? "border-red-400 focus:border-red-400" : "border-zinc-200 focus:border-[#37C0FF]"}`}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-700">{t("Nội dung")}</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(p => ({ ...p, message: undefined })); }}
                placeholder={t("nội dung tin nhắn")}
                className={`border rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none transition-colors resize-none ${errors.message ? "border-red-400 focus:border-red-400" : "border-zinc-200 focus:border-[#37C0FF]"}`}
              />
              {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
            </div>

            {status === "success" && (
              <p className="text-sm text-green-600 font-medium">{t("✅ Yêu cầu đã được gửi thành công!")}</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 font-medium">{t("❌ Có lỗi xảy ra, vui lòng thử lại.")}</p>
            )}

            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? t("Đang gửi...") : t("Gửi yêu cầu")}
            </Button>
          </form>

        </div>
      </div>
    </GlowBackground>
  );
}
