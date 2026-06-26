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
      <body className="min-h-screen antialiased m-0 p-0 font-sans bg-emerald-50/30 text-slate-900">
        {/* Minty Header Layout */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            
            {/* Brand Mark Link & Side Text */}
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80 group">
              <div className="h-9 w-9 overflow-hidden rounded-md border border-emerald-200 bg-white flex items-center justify-center p-0.5 shadow-sm">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnBWHeiaESzg1aLdQf4GsMAjTp4dpPbuLxQOq1BaypAg&s=10"
                  alt="Nish AI Logo"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                Nish AI
              </span>
            </Link>
            
            {/* Navigation Channels */}
            <div className="flex items-center gap-8 text-sm font-semibold text-slate-700 tracking-wide">
              <Link href="/about" className="hover:text-emerald-600 transition-colors">About</Link>
              <Link href="/services" className="hover:text-emerald-600 transition-colors">Services</Link>
              <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Application Frame */}
        <div className="w-full">
          {children}
        </div>
      </body>
    </html>
  );
}