"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/Button";

const interests = ["AI Infrastructure", "Research Partnership", "Investment", "Career", "Other"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", interest: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s <span className="gradient-text">connect</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re an investor, researcher, enterprise buyer, or just curious — we&apos;re happy to talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-6 pb-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-white font-semibold text-xl mb-4">Get in touch</h2>
              <p className="text-white/40 text-sm leading-relaxed">We respond to every message. No gatekeeping, no auto-replies — a real person will read your note.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 glass rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-400" size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white/30 text-xs mb-0.5">General</p>
                  <a href="mailto:contact@ignara.ai" className="text-white/70 hover:text-white text-sm transition-colors">contact@ignara.ai</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 glass rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-400" size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white/30 text-xs mb-0.5">Founder</p>
                  <a href="mailto:jagan@ignara.ai" className="text-white/70 hover:text-white text-sm transition-colors">jagan@ignara.ai</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 glass rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-400" size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white/30 text-xs mb-0.5">Location</p>
                  <p className="text-white/70 text-sm">United States</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="md:col-span-3">
            {sent ? (
              <div className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                  <CheckCircle className="text-green-400" size={28} aria-hidden="true" />
                </div>
                <h3 className="text-white font-semibold text-xl">Message sent</h3>
                <p className="text-white/40 text-sm max-w-xs">We&apos;ll get back to you as soon as possible. Thanks for reaching out.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", interest: "", message: "" }); }} className="mt-4 text-cyan-400 text-sm hover:text-cyan-300 transition-colors">Send another message</button>
              </div>
            ) : (
              <div className="glass rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-white/50 text-xs mb-2 uppercase tracking-wider">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/6 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/50 text-xs mb-2 uppercase tracking-wider">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/6 transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="interest" className="block text-white/50 text-xs mb-2 uppercase tracking-wider">I&apos;m reaching out about</label>
                  <select
                    id="interest"
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none"
                  >
                    <option value="" className="bg-[#0B1220]">Select a topic</option>
                    {interests.map((i) => (
                      <option key={i} value={i} className="bg-[#0B1220]">{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/50 text-xs mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you're working on or what you'd like to discuss..."
                    rows={5}
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/6 transition-all resize-none"
                    required
                  />
                </div>
                <Button
                  onClick={handleSubmit}
                  disabled={loading || !form.name || !form.email || !form.message}
                  className="w-full justify-center"
                  icon={!loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2"><Send size={14} aria-hidden="true" /> Send Message</span>
                  )}
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
