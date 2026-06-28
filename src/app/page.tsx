"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-7rem)] w-full flex items-center justify-center px-6 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Side: Heavy Animated Copy (Expanded for a natural shift) */}
        <div className="lg:col-span-7 space-y-6 flex flex-col items-start order-2 lg:order-1">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="bg-purple-400 text-black text-xs font-black uppercase tracking-widest px-4 py-1.5 border-2 border-black brutal-shadow select-none"
          >
            Nish AI LLC
          </motion.div>

          <div className="space-y-2 overflow-hidden">
            <motion.h1 
              initial={{ y: 100, rotate: -5, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 100 }}
              className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none text-black text-left"
            >
              Intelligent <br />
              <motion.span 
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-cyan-300 px-2 inline-block border-4 border-black brutal-shadow mt-2 transform origin-left cursor-default"
              >
                Autocomplete
              </motion.span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="text-lg font-bold text-zinc-800 tracking-tight max-w-xl bg-white p-4 border-2 border-black brutal-shadow"
          >
            Custom language processing models tailored to recognize internal company terminology, workflows, and specialized team context. Completely secure, private, and self-contained.
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Link 
              href="/services" 
              className="px-8 py-5 bg-lime-300 text-black border-4 border-black font-black uppercase tracking-wider text-sm brutal-shadow-interactive block cursor-pointer"
            >
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Widescreen Framed Image Box (Shifted to the right) */}
        <motion.div 
          initial={{ y: 100, opacity: 0, rotate: 3 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
          whileHover={{ scale: 1.02, rotate: -1 }}
          className="lg:col-span-5 bg-white border-4 border-black brutal-shadow-lg relative group order-1 lg:order-2 aspect-[16/9] w-full flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Pulse */}
          <motion.div 
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px] z-0" 
          />
          
          <motion.img 
            animate={{ 
              y: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
            src="/images/Nish Digital Lion.png"
            alt="Nish AI Digital Lion"
            className="w-full h-full object-cover z-10 relative"
          />
        </motion.div>

      </div>
    </main>
  );
}