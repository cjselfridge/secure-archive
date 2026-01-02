"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RedactedText({ children, label = "CLASSIFIED" }: { children: React.ReactNode; label?: string }) {
  return (
    <motion.span 
      className="group relative inline-block cursor-crosshair align-bottom"
      whileHover="visible"
      initial="hidden"
    >
      {/* The Black Bar Overlay */}
      <motion.span 
        variants={{
          hidden: { opacity: 1 },
          visible: { opacity: 0 }
        }}
        className="absolute inset-0 bg-zinc-800 border border-zinc-600 z-10 flex items-center justify-center"
      >
        <span className="text-[8px] text-zinc-500 uppercase tracking-widest">{label}</span>
      </motion.span>

      {/* The Revealed Text */}
      <span className="relative z-0 px-1 bg-yellow-500/10 text-yellow-500 font-bold">
        {children}
      </span>
    </motion.span>
  );
}