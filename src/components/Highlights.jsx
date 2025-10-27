import { motion } from "framer-motion";
import { ShieldX, WalletMinimal, BellOff, Users, Building2 } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Highlights() {
  return (
    <section className="relative bg-white py-20" aria-label="Benefits and Targets">
      <div className="absolute inset-x-0 -top-24 -z-0 h-48 bg-gradient-to-b from-purple-600/20 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-6">
        {/* Benefits */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Benefits</h2>
          <p className="mt-3 text-gray-600">Feel the efficiency of zero-touch logistics across your operations.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: ShieldX, title: "No Inefficiencies", text: "Automated dispatching, routing and reconciliations remove bottlenecks." },
            { icon: WalletMinimal, title: "No Payment Issues", text: "Unified payouts and COD reconciliation with real-time audit trails." },
            { icon: BellOff, title: "No Panics", text: "Live tracking and alerts ensure proactive resolution, not firefighting." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Targets */}
        <div className="mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-purple-600/10 p-3 text-purple-700">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">For 3PL / 2PL Vendors</h3>
            </div>
            <p className="mt-3 text-gray-600">A multi-client dashboard that consolidates SLAs, routes, and payouts across accounts.</p>
            <div className="mt-5 h-48 rounded-xl bg-gradient-to-tr from-purple-600/10 to-blue-600/10 p-4">
              <div className="mb-3 h-3 w-28 rounded-full bg-purple-500/40" />
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-16 w-full rounded-lg bg-purple-500/20" />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-600/10 p-3 text-blue-700">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">For D2C Brands</h3>
            </div>
            <p className="mt-3 text-gray-600">Visualize deliveries over an India map, with smooth routing animations and real-time status.</p>
            <div className="mt-5 h-48 overflow-hidden rounded-xl bg-gradient-to-tr from-blue-600/10 to-purple-600/10 p-4">
              <div className="relative h-full w-full">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute h-2 w-2 rounded-full bg-blue-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1, 0.8] }}
                    transition={{ duration: 2 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                    style={{ left: `${8 + i * 8}%`, top: `${20 + (i % 5) * 12}%` }}
                    aria-hidden
                  />
                ))}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ x: "-20%" }}
                  animate={{ x: "20%" }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
                  aria-hidden
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
