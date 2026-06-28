import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nish AI LLC",
  description: "Autocomplete That Knows Your Inside Jokes",
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
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            
            {/* Brand Mark Link pointing to public/images/Logo.png */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-9 w-9 overflow-hidden border-2 border-black bg-yellow-300 flex items-center justify-center p-0.5 shadow-sm transform group-hover:rotate-6 transition-transform">
                <img 
                  src="/images/Logo.png"
                  alt="Nish AI Logo"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-black">
                Nish AI
              </span>
            </Link>
            
            <div className="flex items-center gap-6 text-sm font-black uppercase tracking-tight">
              <Link href="/about" className="hover:bg-cyan-300 px-3 py-1.5 border-2 border-transparent hover:border-black transition-all">About</Link>
              <Link href="/services" className="hover:bg-lime-300 px-3 py-1.5 border-2 border-transparent hover:border-black transition-all">Services</Link>
              <Link href="/contact" className="hover:bg-rose-300 px-3 py-1.5 border-2 border-transparent hover:border-black transition-all">Contact</Link>
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