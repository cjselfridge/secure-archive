"use client";
import { ShoppingBag, Database, ShieldAlert } from "lucide-react";
import AssetCard from "@/components/AssetCard";
import RedactedText from "@/components/RedactedText";

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto z-10 relative">
      
      {/* 1. BIG VISUAL HEADER */}
      <header className="mb-24 mt-8">
        <div className="border-l-2 border-emerald-500 pl-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
            ARCHIVE_01
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Secure Portfolio Terminal. Authorized Personnel Only.<br/>
            Specializing in <span className="text-white font-bold">RWA Tokenization</span> & <span className="text-white font-bold">Blockchain Security</span>.
          </p>
        </div>
      </header>

      {/* 2. THE GRID (Now with Visual Cards) */}
      <section className="mb-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px bg-zinc-700 flex-grow"></div>
          <span className="text-zinc-500 font-mono text-sm tracking-widest flex items-center gap-2">
            <Database size={14} /> DECLASSIFIED FILES
          </span>
          <div className="h-px bg-zinc-700 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <AssetCard 
            code="AU-24"
            title="PROJECT AU"
            status="ARCHIVED"
            description="Experimental tokenized gold standard protocol. Critical stress-test failure during beta provided key insights into smart contract vulnerabilities."
            stats="LESSON: SECURITY FIRST"
          />

          <AssetCard 
            code="SB-V7"
            title="PROJECT VALENCE"
            status="SUCCESS"
            description="Decentralized emotional-asset protocol. Leveraged community bonding curves to drive massive organic growth."
            stats="VALUATION: $7,000,000"
          />

          <AssetCard 
            code="M-MINING"
            title="MARA INTEL"
            status="ACTIVE"
            description="Strategic growth operations for high-volume Bitcoin mining infrastructure. Optimization of hash rate efficiency."
            stats="SECTOR: INFRASTRUCTURE"
          />

        </div>
      </section>

      {/* 3. THE BIO (High Contrast) */}
      <section className="mb-32 max-w-4xl mx-auto">
        <div className="bg-zinc-900/50 border border-zinc-700 p-8 md:p-12 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
          <div className="flex items-center gap-2 mb-6 text-emerald-400 font-mono text-xs uppercase tracking-widest">
            <ShieldAlert size={14} />
            Operator_Bio.txt
          </div>
          
          <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed font-light">
            I operate at the intersection of tangible commodities and digital scarcity. 
            My background involves building a <RedactedText>$7M Market Cap</RedactedText> asset 
            from scratch, conducting offensive security research on <RedactedText>Layer 1 Chains</RedactedText>, 
            and optimizing Bitcoin mining logistics.
          </p>
        </div>
      </section>

      {/* 4. SHOP SECTION */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
            <div className="h-px bg-zinc-700 flex-grow"></div>
            <span className="text-zinc-500 font-mono text-sm tracking-widest flex items-center gap-2">
              <ShoppingBag size={14} /> SUPPLY DROP
            </span>
            <div className="h-px bg-zinc-700 flex-grow"></div>
        </div>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl h-64 flex flex-col items-center justify-center relative overflow-hidden group">
           {/* Decorative Background grid for the shop */}
           <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
           
           <h3 className="text-2xl font-bold text-white mb-2 z-10">Inventory Locked</h3>
           <p className="text-zinc-500 mb-6 z-10">Commodities are currently being secured.</p>
           <button className="bg-white text-black px-8 py-3 font-bold text-sm hover:bg-zinc-200 transition-colors z-10 rounded">
               REQUEST ACCESS KEY
           </button>
        </div>
      </section>

    </main>
  );
}