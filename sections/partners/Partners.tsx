"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { InvestorTab } from "./InvestorTab";
import { IBTab } from "./IBTab";
import { StrategicTab } from "./StrategicTab";
import { PARTNERS_TABS, type PartnersTabId } from "@/lib/constants";
import { useT } from "@/lib/i18n";

type TabId = PartnersTabId;

export function Partners() {
  const t = useT();
  const searchParams = useSearchParams();

  const initialTab = (() => {
    const tab = searchParams.get("tab") as TabId | null;
    return tab && PARTNERS_TABS.some((p) => p.id === tab) ? tab : "investor";
  })();

  const [active, setActive] = useState<TabId>(initialTab);

  return (
    <section className="w-full bg-white pt-16">
      <div className="max-w-full mx-auto">

        {/* Tab bar */}
        <div className="flex justify-center px-4">
          <div className="inline-flex items-center gap-1 bg-white border border-[#E5E5E5] rounded-full p-1.5 shadow-sm w-full max-w-sm md:w-auto md:max-w-none">
            {PARTNERS_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="relative flex-1 md:flex-none h-10 md:h-11.25 px-3 md:px-7 rounded-full text-sm font-medium transition-colors duration-200"
              >
                {active === tab.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-linear-to-r from-[#37C0FF] to-[#0076FF] border border-[#0076FF]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 text-sm md:text-[22px] font-semibold whitespace-nowrap ${
                    active === tab.id ? "text-white" : "text-[#1D1D1D] hover:text-zinc-800"
                  }`}
                >
                  {t(tab.label)}
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

