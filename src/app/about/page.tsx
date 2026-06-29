"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const team = [
    { name: "Lucas Lu", role: "Systems Infrastructure / Founder", hex: "bg-emerald-300" },
    { name: "Ritwik Singh", role: "Architecture / Founder", hex: "bg-purple-300" },
    { name: "Hongyi Ren", role: "Neural Logic & Security", hex: "bg-amber-300" }
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
                key={idx}
                initial={{ opacity: 0, y: 50, rotate: idx % 2 === 0 ? -3 : 3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                whileHover={{ rotate: idx % 2 === 0 ? 4 : -4, scale: 1.05 }}
                className="border-4 border-black bg-white p-6 brutal-shadow-interactive cursor-default"
              >
                <div className={`aspect-square border-2 border-black ${member.hex} mb-4 flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)] overflow-hidden`}>
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ repeat: Infinity, duration: 2, delay: idx * 0.3 }}
                    className="text-4xl font-black"
                  >
                    ⚙️
                  </motion.div>
                </div>
                <h3 className="font-black text-xl uppercase tracking-tighter">{member.name}</h3>
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