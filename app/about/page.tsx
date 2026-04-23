"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          About Us
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          We are a team of passionate developers building modern web applications with cutting-edge technologies. Our mission is to make the web faster, more beautiful, and highly interactive.
        </p>
      </motion.div>
    </div>
  );
}
