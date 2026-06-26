import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Ignara AI",
};

export default function Terms() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/40 text-sm">Last updated: January 2025</p>
        </div>
        <div className="space-y-10">
          {[
            { title: "1. Acceptance of Terms", body: "By accessing and using ignara.ai, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website." },
            { title: "2. Use of Website", body: "You may use this website for lawful purposes only. You agree not to use this site in any way that violates applicable laws or regulations, or that harms or could harm Ignara AI or any third parties." },
            { title: "3. Intellectual Property", body: "All content on this website, including text, graphics, logos, and software, is the property of Ignara AI and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without express written permission." },
            { title: "4. Disclaimer of Warranties", body: "This website is provided on an 'as is' and 'as available' basis without any warranties of any kind. Ignara AI disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose." },
            { title: "5. Limitation of Liability", body: "Ignara AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of this website." },
            { title: "6. External Links", body: "Our website may contain links to third-party websites. These links are provided for your convenience only. Ignara AI has no control over the content of those sites and accepts no responsibility for them." },
            { title: "7. Changes to Terms", body: "Ignara AI reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the new terms." },
            { title: "8. Governing Law", body: "These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions." },
            { title: "9. Contact", body: "For questions about these Terms of Service, please contact us at contact@ignara.ai." },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-white font-semibold text-lg mb-3">{section.title}</h2>
              <p className="text-white/50 text-base leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
