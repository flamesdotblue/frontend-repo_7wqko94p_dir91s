import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, Map, PackageSearch } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero({ onStartTrial }) {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      aria-label="Zyder Hero"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600"
        aria-hidden
      />

      {/* Glass overlay grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px, 56px 56px",
          backgroundPosition: "-1px -1px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white shadow-sm ring-1 ring-white/20 backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            100% Transparency
          </span>
          <h1 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Revolutionize Your Logistics with Zyder – 0% Manual Work, 100% Transparency
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            One-click solutions that empower 3PL, 2PL vendors, and D2C brands to manage last-mile delivery with zero additional costs.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={onStartTrial}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-gray-900 shadow/30 shadow-black/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
              aria-label="Start Free Trial"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-colors duration-300 ease-out hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              Explore Features
            </a>
          </div>
        </motion.div>

        {/* Dashboard mockups */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2"
          aria-label="Product mockups"
        >
          <div className="rounded-2xl bg-white/10 p-4 shadow-xl ring-1 ring-white/20 backdrop-blur">
            <div className="flex items-center justify-between text-white/90">
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <Truck className="h-4 w-4" /> Fleet Overview
              </span>
              <span className="text-xs">Live</span>
            </div>
            <div className="mt-4 h-44 w-full rounded-xl bg-gradient-to-tr from-white/15 to-white/5 p-4">
              <div className="mb-3 h-3 w-28 rounded-full bg-white/40" />
              <div className="grid grid-cols-3 gap-3">
                {[52, 76, 33].map((h, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="h-24 w-full rounded-lg bg-white/30" />
                    <div className="h-2 w-20 rounded bg-white/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 p-4 shadow-xl ring-1 ring-white/20 backdrop-blur">
            <div className="flex items-center justify-between text-white/90">
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <Map className="h-4 w-4" /> Route Performance
              </span>
              <span className="text-xs">Today</span>
            </div>
            <div className="mt-4 h-44 w-full rounded-xl bg-gradient-to-tr from-white/15 to-white/5 p-4">
              <div className="mb-3 flex items-center gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="h-2 w-2 rounded-full bg-emerald-300/90 shadow" />
                ))}
              </div>
              <div className="h-[120px] w-full rounded-lg bg-white/30" />
            </div>
          </div>
        </motion.div>

        {/* Subtle animated logistics icons */}
        <div className="pointer-events-none mt-12 grid grid-cols-3 gap-6 text-white/80 sm:grid-cols-6">
          {[Truck, PackageSearch, Map].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center"
              aria-hidden
            >
              <Icon className="h-5 w-5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
