import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Gauge, Users, Wallet, Briefcase, BarChart3, ArrowLeft, ArrowRight } from "lucide-react";

const screens = [
  { title: "Dashboard", icon: Gauge, color: "from-purple-500/20 to-blue-500/20" },
  { title: "Employee Tracking", icon: Users, color: "from-blue-500/20 to-purple-500/20" },
  { title: "Payouts", icon: Wallet, color: "from-emerald-500/20 to-blue-500/10" },
  { title: "Hiring", icon: Briefcase, color: "from-purple-500/20 to-indigo-500/20" },
  { title: "PnL Report", icon: BarChart3, color: "from-blue-500/20 to-emerald-500/20" },
];

export default function Showcase() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((p) => (p - 1 + screens.length) % screens.length);
  const next = () => setIndex((p) => (p + 1) % screens.length);

  const Icon = screens[index].icon;

  return (
    <section id="features" className="bg-white py-20" aria-label="Showcase">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Features</h2>
          <p className="mt-3 text-gray-600">A quick look at the web and mobile experiences.</p>
        </div>

        {/* Carousel */}
        <div className="mt-10">
          <div className="relative mx-auto max-w-4xl">
            <div className="flex items-center justify-between">
              <button aria-label="Previous" onClick={prev} className="rounded-full border border-gray-200 bg-white p-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="text-sm text-gray-600">
                {index + 1} / {screens.length}
              </div>
              <button aria-label="Next" onClick={next} className="rounded-full border border-gray-200 bg-white p-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-6 rounded-2xl border border-gray-200 bg-gradient-to-tr p-6 shadow-sm"
            >
              <div className={`h-64 w-full rounded-xl bg-gradient-to-br ${screens[index].color} p-6`}> 
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white/80 p-3 text-gray-800 shadow">
                      {Icon ? <Icon className="h-6 w-6" /> : null}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{screens[index].title}</h3>
                  </div>
                  <Smartphone className="h-6 w-6 text-gray-500" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-24 rounded-lg bg-white/70" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* App links */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Get the App</h3>
            <p className="mt-2 text-gray-600">Manage operations anywhere – built for on-ground teams.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-black px-4 py-3 text-white shadow transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                aria-label="Get it on Google Play"
              >
                <img src="https://images.unsplash.com/photo-1512149673953-1e251807ec7c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBQbGF5fGVufDB8MHx8fDE3NjE1NjU1NzR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Google Play" className="h-5 w-5" loading="lazy" />
                <span className="text-sm font-medium">Get it on Google Play</span>
              </a>
              <div className="inline-flex items-center gap-3 rounded-xl bg-gray-900 px-4 py-3 text-white opacity-70">
                <img src="https://images.unsplash.com/photo-1603515161074-3206aaeb03f2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcHAlMjBTdG9yZXxlbnwwfDB8fHwxNzYxNTY1NTc1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="App Store" className="h-5 w-5" loading="lazy" />
                <span className="text-sm font-medium">App Store – Coming Soon</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600">Android QR</p>
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fplay.google.com%2Fstore"
                  alt="QR code for Google Play"
                  className="mt-2 h-40 w-40 rounded-lg border border-gray-200"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600">iOS QR</p>
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=Zyder%20App%20Store%20Coming%20Soon"
                  alt="QR code for App Store coming soon"
                  className="mt-2 h-40 w-40 rounded-lg border border-gray-200"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Why teams choose Zyder</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> 0% manual intervention through AI-assisted workflows</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Unified ops across 3PL/2PL and D2C channels</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> COD reconciliation and automated payouts</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> End-to-end transparency with audit trails</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
