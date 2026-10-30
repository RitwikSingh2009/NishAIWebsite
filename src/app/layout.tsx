import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import logo from "../../public/images/Logo.png";
import "./globals.css";

const displayFont = localFont({
  src: "../../public/fonts/newsreader-italic-variable.ttf",
  weight: "200 800",
  style: "italic",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Nish AI",
  description: "Autocomplete that speaks your team’s language.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={displayFont.variable}>
      <body className="min-h-screen antialiased">
        <header>
          <nav className="grid h-16 grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6">
            <Link href="/" className="justify-self-start">
              <img src={logo.src} alt="Nish AI" className="h-10 w-10" />
            </Link>
            <div className="flex items-center gap-2 text-sm">
              <Link href="/about" className="hidden rounded-md px-3 py-1.5 transition-colors hover:bg-black/5 sm:block">About</Link>
              <Link href="/contact" className="hidden rounded-md px-3 py-1.5 transition-colors hover:bg-black/5 sm:block">Contact</Link>
            </div>
            <Link href="/#waitlist" className="justify-self-end rounded-md bg-purple-200 px-3 py-1.5 text-sm transition-colors hover:bg-purple-300">Join waitlist ↗</Link>
          </nav>
        </header>
        {children}
        <footer className="px-4 py-10 text-sm text-black/60 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Link href="/" className="flex items-center gap-2 font-semibold text-black">
              <img src={logo.src} alt="" className="h-6 w-6" />
              Nish AI
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-black">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-black">Contact</Link>
              <span>© {new Date().getFullYear()} Nish AI</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
