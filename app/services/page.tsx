"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  const services = [
    { title: "Web Development", description: "Custom web applications built with Next.js and React." },
    { title: "UI/UX Design", description: "Beautiful, intuitive, and highly responsive user interfaces." },
    { title: "API Integration", description: "Seamless connection with third-party services and backend." },
  ];

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full px-4 py-24">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            What we can do for you.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
