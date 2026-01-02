"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";

interface AssetProps {
  code: string;
  title: string;
  status: "ARCHIVED" | "SUCCESS" | "ACTIVE";
  description: string;
  stats: string;
}

export default function AssetCard({ code, title, status, description, stats }: AssetProps) {
  const statusColors = {
    ARCHIVED: "bg-red-500/20 text-red-200 border-red-500/50",
    SUCCESS: "bg-emerald-500/20 text-emerald-200 border-emerald-500/50",
    ACTIVE: "bg-amber-500/20 text-amber-200 border-amber-500/50",
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="flex flex-col bg-zinc-900 border border-zinc-700 overflow-hidden group hover:border-zinc-500 transition-colors h-full"
    >
      {/* 1. VISUAL AREA (Placeholder for where your images will go) */}
      <div className="h-48 bg-zinc-800 flex items-center justify-center border-b border-zinc-700 relative overflow-hidden">
        {/* This icon is a placeholder. Later you can put <img src="..." /> here */}
        <ImageIcon className="text-zinc-600 w-12 h-12 opacity-50 group-hover:scale-110 transition-transform duration-500" />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
        
        {/* Status Badge floating on top */}
        <div className={`absolute top-3 right-3 px-2 py-1 text-[10px] font-bold border rounded ${statusColors[status]}`}>
          {status}
        </div>
      </div>

      {/* 2. CONTENT AREA */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs text-zinc-500 font-mono mb-2">REF: {code}</div>
        
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="pt-4 border-t border-zinc-800 flex justify-between items-center mt-auto">
          <span className="text-xs font-mono text-zinc-300 font-bold bg-zinc-800 px-2 py-1 rounded">
            {stats}
          </span>
          <ArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors" size={18} />
        </div>
      </div>
    </motion.div>
  );
}