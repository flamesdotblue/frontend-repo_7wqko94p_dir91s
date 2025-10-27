import { useState } from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", expectations: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Simple front-end validation
    if (!form.name || !form.email || !form.phone || !form.business || !form.expectations) return;
    setSubmitted(true);
  };

  return (
    <section className="relative bg-gray-50 py-20" aria-label="Pricing">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Simple Pricing</h2>
        <p className="mt-3 text-gray-600">Scale confidently. Only pay for value delivered.</p>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 text-xs font-medium text-white">
              100% Transparency
            </div>
            <p className="text-sm text-gray-600">Custom plans tailored to your shipment volumes and SLAs.</p>
            <button
              onClick={() => setOpen(true)}
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white shadow transition hover:bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-500"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-label="Request Demo Form">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Request a Demo</h3>
                <p className="mt-1 text-sm text-gray-600">Fill the form and our team will reach out within 24 hours.</p>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500" aria-label="Close">
                ✕
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-gray-700" htmlFor="name">Name *</label>
                  <input id="name" name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20" placeholder="Jane Doe" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-gray-700" htmlFor="email">Email *</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20" placeholder="jane@company.com" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-gray-700" htmlFor="phone">Phone *</label>
                  <input id="phone" name="phone" value={form.phone} onChange={onChange} required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20" placeholder="+91 98765 43210" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-gray-700" htmlFor="business">Business Name *</label>
                  <input id="business" name="business" value={form.business} onChange={onChange} required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20" placeholder="Acme Logistics" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="expectations">Expectations *</label>
                  <textarea id="expectations" name="expectations" value={form.expectations} onChange={onChange} required rows={4} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20" placeholder="What would you like Zyder to solve?" />
                </div>
                <div className="sm:col-span-2 flex items-center justify-end gap-3">
                  <button type="button" onClick={() => setOpen(false)} className="rounded-xl px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300">Cancel</button>
                  <button type="submit" className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 font-semibold text-white shadow hover:opacity-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-500">Submit</button>
                </div>
              </form>
            ) : (
              <div className="mt-6 rounded-xl bg-gray-50 p-6 text-left">
                <p className="text-sm text-gray-700">Thanks, <span className="font-medium">{form.name}</span>! We have received your request. We will contact you at <span className="font-medium">{form.email}</span>.</p>
                <button onClick={() => setOpen(false)} className="mt-4 rounded-xl bg-gray-900 px-4 py-2 text-white">Close</button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
