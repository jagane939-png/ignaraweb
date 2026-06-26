"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

const interests = ["AI Infrastructure", "Research Partnership", "Investment", "Enterprise", "Career", "Other"];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "10px",
  padding: "12px 16px",
  color: "#fff",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
};

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
    <div style={{ minHeight: "100vh", paddingTop: "96px" }}>

      {/* Hero */}
      <section className="section-pad-sm" style={{ position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-tag">Contact</div>
            <h1 className="display-xl" style={{ color: "#fff", marginBottom: "24px" }}>
              Let&apos;s <span className="gt-white">connect</span>
            </h1>
            <p className="body-lg" style={{ color: "rgba(240,244,255,0.5)", maxWidth: "520px" }}>
              Whether you&apos;re an investor, researcher, enterprise buyer, or just curious — we&apos;re happy to talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad">
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: "64px", alignItems: "start" }}>

            {/* Info */}
            <motion.div {...reveal()}>
              <h2 style={{ color: "#fff", fontWeight: 700, fontSize: "22px", marginBottom: "16px", letterSpacing: "-0.02em" }}>Get in touch</h2>
              <p className="body-md" style={{ color: "rgba(240,244,255,0.45)", marginBottom: "36px" }}>
                We respond to every message. No gatekeeping, no auto-replies — a real person will read your note.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
                {[
                  { icon: Mail, label: "General", value: "contact@ignara.ai", href: "mailto:contact@ignara.ai" },
                  { icon: Mail, label: "Founder", value: "jagan@ignara.ai", href: "mailto:jagan@ignara.ai" },
                  { icon: MapPin, label: "Location", value: "United States", href: null },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 20px", borderRadius: "12px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <item.icon size={15} style={{ color: "#60a5fa" }} aria-hidden="true" />
                    </div>
                    <div>
                      <p style={{ fontSize: "11px", color: "rgba(240,244,255,0.3)", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="body-sm" style={{ color: "rgba(240,244,255,0.7)", textDecoration: "none" }}>{item.value}</a>
                      ) : (
                        <p className="body-sm" style={{ color: "rgba(240,244,255,0.7)" }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...reveal(0.1)}>
              {sent ? (
                <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "64px", textAlign: "center" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(52,211,153,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <CheckCircle size={26} style={{ color: "#34d399" }} aria-hidden="true" />
                  </div>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "20px", marginBottom: "10px" }}>Message sent</h3>
                  <p className="body-md" style={{ color: "rgba(240,244,255,0.45)", maxWidth: "300px", margin: "0 auto 24px" }}>We&apos;ll get back to you as soon as possible. Thanks for reaching out.</p>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", interest: "", message: "" }); }}
                    style={{ background: "none", border: "none", color: "#06b6d4", fontSize: "14px", cursor: "pointer" }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "48px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                    <div>
                      <label htmlFor="name" style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,244,255,0.3)", marginBottom: "8px" }}>Your Name</label>
                      <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Smith" style={inputStyle} required
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(37,99,235,0.5)"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.09)"; }} />
                    </div>
                    <div>
                      <label htmlFor="email" style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,244,255,0.3)", marginBottom: "8px" }}>Email</label>
                      <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@company.com" style={inputStyle} required
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(37,99,235,0.5)"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.09)"; }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <label htmlFor="interest" style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,244,255,0.3)", marginBottom: "8px" }}>I&apos;m Reaching Out About</label>
                    <select id="interest" value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      style={{ ...inputStyle, appearance: "none" }}>
                      <option value="" style={{ background: "#0a1220" }}>Select a topic</option>
                      {interests.map((i) => <option key={i} value={i} style={{ background: "#0a1220" }}>{i}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: "24px" }}>
                    <label htmlFor="message" style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,244,255,0.3)", marginBottom: "8px" }}>Message</label>
                    <textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what you're working on or what you'd like to discuss..."
                      rows={5} style={{ ...inputStyle, resize: "none" }} required
                      onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(37,99,235,0.5)"; }}
                      onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.09)"; }} />
                  </div>
                  <button onClick={handleSubmit} disabled={loading || !form.name || !form.email || !form.message}
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px", borderRadius: "10px", background: loading || !form.name || !form.email || !form.message ? "rgba(37,99,235,0.5)" : "#2563eb", color: "#fff", fontWeight: 600, fontSize: "15px", border: "none", cursor: loading || !form.name || !form.email || !form.message ? "not-allowed" : "pointer", transition: "background 0.2s" }}>
                    {loading ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
                        Sending...
                      </>
                    ) : (
                      <><Send size={15} aria-hidden="true" /> Send Message</>
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
