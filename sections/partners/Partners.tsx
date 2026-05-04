"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { InvestorTab } from "./InvestorTab";
import { IBTab } from "./IBTab";
import { StrategicTab } from "./StrategicTab";
import { PARTNERS_TABS, type PartnersTabId } from "@/lib/constants";

type TabId = PartnersTabId;

export function Partners() {
  const searchParams = useSearchParams();

  const initialTab = (() => {
    const tab = searchParams.get("tab") as TabId | null;
    return tab && PARTNERS_TABS.some((t) => t.id === tab) ? tab : "investor";
  })();

  const [active, setActive] = useState<TabId>(initialTab);

  return (
    <section className="w-full bg-white pt-16">
      <div className="max-w-full mx-auto">

        {/* Tab bar */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1 bg-white border border-zinc-200 rounded-full p-1 shadow-sm">
            {PARTNERS_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="relative px-7 py-2.5 rounded-full text-sm font-medium transition-colors duration-200"
              >
                {active === tab.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-linear-to-r from-[#37C0FF] to-[#0076FF]"
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
            {active === "strategic" && <StrategicTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

