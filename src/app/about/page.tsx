import React from "react";

export default function About() {
  const team = [
    { name: "Ritwik Singh", role: "Founding Engineer / Architecture" },
    { name: "Lucas Lu", role: "UI/UX / Systems Architect" },
    { name: "Hongyi Ren", role: "Security & Neural Logic" }
  ];

  return (
    <main className="relative min-h-screen w-full bg-emerald-50/50 pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Manifesto Section */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
            The Privacy Manifesto
          </h1>
          <div className="space-y-6 text-lg text-slate-700 font-medium leading-relaxed">
            <p>
              In a tech ecosystem hyper-focused on compiling user behaviors and recording query strings into centralized databases, Nish AI runs backwards. We believe computational scaling shouldn't rely on sacrificing operational security.
            </p>
            <p>
              Our core infrastructure processes actions directly inside the application run-state, avoiding intermediate analytical tracking. Your workspace is explicitly your own.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="border-t border-emerald-200 pt-16">
          <h2 className="text-2xl font-black text-slate-900 mb-10 uppercase tracking-widest">
            Core Operators
          </h2>

          <div className="grid sm:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square rounded-2xl bg-white border border-emerald-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-emerald-400 group-hover:shadow-md transition-all">
                   <div className="w-12 h-1 bg-emerald-100 group-hover:bg-emerald-400 transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{member.name}</h3>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}