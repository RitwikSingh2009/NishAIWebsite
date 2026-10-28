import type { Metadata } from "next";
import Link from "next/link";
import logo from "../../public/images/Logo.png";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nish AI — Join the Waitlist",
  description: "Autocomplete that speaks your team’s language. Join the Nish AI waitlist for launch and early access updates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased m-0 p-0 bg-zinc-100 text-black selection:bg-cyan-300 selection:text-black">
        <nav className="fixed top-4 left-4 right-4 z-50 bg-white border-4 border-black brutal-shadow rounded-none">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between">
            
            <Link href="/" className="flex items-center gap-3 group">
              <div className="brand-logo h-14 w-14 shadow-sm transform group-hover:rotate-6 transition-transform">
                <img 
                  src={logo.src}
                  alt="Nish AI Logo"
                  className="brand-logo-image"
                />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-black">
                Nish AI
              </span>
            </Link>
            
            <div className="flex items-center gap-1 sm:gap-6 text-sm font-black uppercase tracking-tight">
              <Link href="/about" className="hidden sm:block hover:bg-cyan-300 px-3 py-1.5 border-2 border-transparent hover:border-black transition-all">About</Link>
              <Link href="/services" className="hidden sm:block hover:bg-lime-300 px-3 py-1.5 border-2 border-transparent hover:border-black transition-all">Services</Link>
              <Link href="/contact" className="hidden sm:block hover:bg-rose-300 px-3 py-1.5 border-2 border-transparent hover:border-black transition-all">Contact</Link>
            <Link href="/#waitlist" className="border-2 border-black bg-lime-300 px-3 py-2 text-xs">Join waitlist ↗</Link>
            </div>
          </div>
        </nav>

        <div className="w-full pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
