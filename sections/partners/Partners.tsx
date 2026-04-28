"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InvestorTab } from "./InvestorTab";
import { IBTab } from "./IBTab";

const TABS = [
  { id: "investor", label: "Nhà đầu tư" },
  { id: "ib", label: "Cộng đồng IB" },
  { id: "strategic", label: "Đối tác chiến lược" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function Partners() {
  const [active, setActive] = useState<TabId>("investor");

  return (
    <section className="w-full bg-white pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Tab bar */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-1 bg-white border border-zinc-200 rounded-full p-1 shadow-sm">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="relative px-7 py-2.5 rounded-full text-sm font-medium transition-colors duration-200"
              >
                {active === tab.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#37C0FF] to-[#0076FF]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    active === tab.id ? "text-white" : "text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {active === "investor" && <InvestorTab />}
            {active === "ib" && <IBTab />}
            {active === "strategic" && <ComingSoon label="Đối tác chiến lược" />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ComingSoon({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-zinc-400">
      <p className="text-lg font-medium">{label} — sắp ra mắt</p>
    </div>
  );
}
