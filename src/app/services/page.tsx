import React from "react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Context-Aware Autocomplete",
    description: "AI language processing models calibrated to recognize internal terminology, team acronyms, and specialized project shorthand.",
  },
  {
    id: 2,
    title: "Custom LLM Fine-Tuning",
    description: "Adapt neural network architectures directly to your local workspace databases while maintaining completely isolated security profiles.",
  },
  {
    id: 3,
    title: "Tailored Workspace Integration",
    description: "Seamlessly inject autonomous operational tooling into your existing development pipelines and communication channels.",
  },
];

export default function Services() {
  return (
    <main className="relative min-h-screen w-full bg-emerald-50/50 pt-32 pb-20 px-6 font-sans">
      {/* Soft Mint Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Intelligent workflow automation designed specifically to sync with your team's unique operational identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-10 rounded-3xl bg-white border border-emerald-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}