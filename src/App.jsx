import { useCallback } from "react";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Showcase from "./components/Showcase";
import Pricing from "./components/Pricing";
import { Twitter, Linkedin } from "lucide-react";

export default function App() {
  const onStartTrial = useCallback(() => {
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      className="font-inter"
      style={{
        // CSS variables per user palette
        // --primary: hsl(262, 83%, 58%) => #8B5CF6
        // --secondary: hsl(217, 91%, 60%) => #3B82F6
        // --accent: hsl(199, 89%, 48%)
        ["--primary"]: "hsl(262, 83%, 58%)",
        ["--secondary"]: "hsl(217, 91%, 60%)",
        ["--accent"]: "hsl(199, 89%, 48%)",
      }}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900">Skip to content</a>

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-white/20 ring-1 ring-white/40 backdrop-blur" aria-hidden />
            <span className="text-base font-semibold text-white drop-shadow">Zyder</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-white/90 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <Hero onStartTrial={onStartTrial} />
        <Highlights />
        <Showcase />
        <div id="pricing"><Pricing /></div>
      </main>

      {/* Footer inline to keep 3-4 imports only */}
      <footer id="contact" className="border-t border-gray-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-gray-900">Zyder</p>
                <p className="text-xs text-gray-600">© 2025 Zyder. All rights reserved.</p>
              </div>
            </div>
            <nav className="flex items-center gap-6 text-sm text-gray-700">
              <a href="#" className="hover:text-gray-900">Home</a>
              <a href="#features" className="hover:text-gray-900">Features</a>
              <a href="#pricing" className="hover:text-gray-900">Pricing</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-50">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-50">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
