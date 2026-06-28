"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Context-Aware Autocomplete",
    desc: "Language processing models calibrated to recognize internal company terminology, team acronyms, and specialized project shorthand.",
    color: "bg-cyan-300"
  },
  {
    id: "02",
    title: "Custom LLM Fine-Tuning",
    desc: "Adapt language model architectures directly to your workspace databases while maintaining completely isolated security profiles.",
    color: "bg-yellow-300"
  },
  {
    id: "03",
    title: "Workspace Integration",
    desc: "Seamlessly connect intelligent text suggestions directly into your existing development pipelines and communication channels.",
    color: "bg-rose-300"
  }
];

export default function Services() {
  return (
    <main className="min-h-screen w-full px-6 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Animated Brutalist Header */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="border-4 border-black bg-white p-8 brutal-shadow max-w-2xl"
        >
          <h1 className="text-5xl font-black uppercase tracking-tighter">Our Services</h1>
          <p className="text-md font-bold text-zinc-700 mt-2">
            Intelligent workflow automation designed to sync with your team's unique operations.
          </p>
        </motion.div>

        {/* Cascade Matrix Stagger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.3, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 140, damping: 12 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="border-4 border-black bg-white p-6 brutal-shadow-interactive flex flex-col justify-between items-start group relative"
            >
              <div className="w-full">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`text-xl font-black p-2 border-2 border-black inline-block mb-6 shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-default ${item.color}`}
                >
                  {item.id}
                </motion.div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-black">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-zinc-800 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="h-4 w-full bg-black mt-8 transform group-hover:translate-x-2 transition-transform duration-200" />
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}