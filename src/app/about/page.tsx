"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const team = [
    { id: "ritwik", name: "Ritwik Singh", role: "Architecture / Founder", src: "/images/Ritwik.jpg" },
    { id: "lucas", name: "Lucas Lu", role: "Systems Infrastructure", src: "/images/Lucas.jpeg" },
    { id: "rain", name: "Hongyi (Rain) Ren", role: "Neural Logic & Security", src: "/images/Rain.jpeg" }
  ];

  return (
    <main className="min-h-screen w-full px-6 pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Core Manifesto Box */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.01 }}
          className="border-4 border-black bg-white p-8 sm:p-12 brutal-shadow-lg relative"
        >
          <motion.h1 
            initial={{ rotate: -5 }}
            animate={{ rotate: -1 }}
            className="text-5xl font-black uppercase tracking-tighter mb-6 bg-yellow-300 inline-block px-3 border-2 border-black"
          >
            Our Mission
          </motion.h1>
          <div className="space-y-6 text-md font-bold text-zinc-900 leading-relaxed">
            <p>
              Nish AI operates with a focus on absolute privacy. We do not compile your queries into central, external data matrices. Technical systems should run securely without constant external telemetry monitoring.
            </p>
            <p>
              Processing computations execute completely within your active ecosystem state. Your specific workflow models remain entirely your proprietary property.
            </p>
          </div>
        </motion.section>

        {/* Team Grid */}
        <section className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-black uppercase tracking-tight bg-white border-2 border-black inline-block px-4 py-1 brutal-shadow"
          >
            Our Team
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <motion.div 
                key={member.id}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                initial={{ opacity: 0, y: 50, rotate: idx % 2 === 0 ? -2 : 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                whileHover={{ rotate: idx % 2 === 0 ? 3 : -3, scale: 1.03 }}
                className="border-4 border-black bg-white p-6 brutal-shadow-interactive cursor-default relative"
              >
                {/* Image Container frame */}
                <div className="aspect-square border-2 border-black bg-zinc-200 mb-4 flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)] overflow-hidden relative">
                  <img 
                    src={member.src}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                  {/* 1. Ritwik: Speech bubble pop-up overlay */}
                  <AnimatePresence>
                    {hoveredMember === "ritwik" && member.id === "ritwik" && (
                      <motion.div 
                        initial={{ scale: 0, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="absolute bottom-4 left-4 right-4 bg-lime-300 border-2 border-black p-2 text-center text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_rgba(0,0,0,1)] text-black z-20"
                      >
                        Baaaa! 🐑
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 2. Lucas: Burger gets eaten overlay */}
                  <AnimatePresence>
                    {hoveredMember === "lucas" && member.id === "lucas" && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-yellow-400/80 flex flex-col items-center justify-center z-20"
                      >
                        <motion.span 
                          animate={{ 
                            scale: [1, 1.3, 0.9, 1.1, 0],
                            rotate: [0, 10, -10, 5, 0]
                          }}
                          transition={{ duration: 1.5, times: [0, 0.2, 0.5, 0.8, 1] }}
                          className="text-6xl select-none"
                        >
                          🍔
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 }}
                          className="text-4xl select-none font-black text-black uppercase tracking-tight"
                        >
                          CRUNCH!
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 3. Rain: Particle Rain drop falling effect overlay */}
                  {hoveredMember === "rain" && member.id === "rain" && (
                    <div className="absolute inset-0 bg-blue-900/40 pointer-events-none z-20 flex justify-around overflow-hidden">
                      {[...Array(6)].map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ y: [-20, 200] }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 0.6 + Math.random() * 0.4, 
                            delay: Math.random() * 0.3,
                            ease: "linear" 
                          }}
                          className="w-0.5 h-6 bg-cyan-300 rounded"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="font-black text-xl uppercase tracking-tighter text-black">{member.name}</h3>
                <p className="text-xs font-black text-zinc-600 uppercase tracking-widest mt-1">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}