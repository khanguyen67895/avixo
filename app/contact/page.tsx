"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md bg-zinc-900/50 border border-white/10 rounded-3xl p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Get in touch
          </h1>
          <p className="mt-2 text-zinc-400">
            We&apos;d love to hear from you.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
              placeholder="How can we help?"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl bg-white text-black font-semibold py-3 mt-4"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
