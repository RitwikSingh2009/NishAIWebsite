import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import logo from "../../public/images/Logo.png";
import "./globals.css";

const displayFont = localFont({
  src: [
    { path: "../../public/fonts/newsreader-variable.ttf", weight: "200 800", style: "normal" },
    { path: "../../public/fonts/newsreader-italic-variable.ttf", weight: "200 800", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

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
    <html lang="en" className={displayFont.variable}>
      <body className="min-h-screen antialiased m-0 p-0 bg-[#FAF8FC] text-black selection:bg-[#A3C6F0] selection:text-black">
        <nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 rounded-2xl border-2 border-black bg-white/90 backdrop-blur">
          <div className="flex h-14 items-center justify-between pl-2 pr-2 sm:pl-3">
            
            <Link href="/" className="flex items-center group">
              <div className="brand-logo h-12 w-12 transform group-hover:rotate-6 transition-transform">
                <img 
                  src={logo.src}
                  alt="Nish AI Logo"
                  className="brand-logo-image"
                />
              </div>
            </Link>
            
            <div className="flex items-center gap-1 sm:gap-2 text-sm font-black uppercase tracking-tight">
              <Link href="/about" className="hidden sm:block hover:bg-[#A3C6F0] px-3 py-1.5 rounded-lg border-2 border-transparent hover:border-black transition-all">About</Link>
              <Link href="/services" className="hidden sm:block hover:bg-[#CEE58B] px-3 py-1.5 rounded-lg border-2 border-transparent hover:border-black transition-all">Services</Link>
              <Link href="/contact" className="hidden sm:block hover:bg-[#EAB1CF] px-3 py-1.5 rounded-lg border-2 border-transparent hover:border-black transition-all">Contact</Link>
            <Link href="/#waitlist" className="ml-1 rounded-xl border-2 border-black bg-[#F8C45B] px-3 py-2 text-xs">Join waitlist ↗</Link>
            </div>
          </div>
        </nav>

        <div className="w-full pt-24">
          {children}
        </div>
      </body>
    </html>
  );
}
