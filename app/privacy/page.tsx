import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Ignara AI",
};

export default function Privacy() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Last updated: January 2025</p>
        </div>
        <div className="prose-custom space-y-10">
          {[
            { title: "1. Information We Collect", body: "We collect information you provide directly to us, such as when you contact us via our website contact form. This may include your name, email address, and message content. We do not sell your personal information to third parties." },
            { title: "2. How We Use Information", body: "We use the information collected to respond to your inquiries, improve our services, and communicate with you about Ignara AI updates and developments. We will not use your information for any purpose other than those described in this policy without your consent." },
            { title: "3. Information Sharing", body: "We do not share, sell, rent, or trade your personal information with third parties for their commercial purposes. We may share information with service providers who assist us in operating our website, subject to confidentiality agreements." },
            { title: "4. Data Security", body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure." },
            { title: "5. Cookies", body: "Our website may use cookies to enhance your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some website features may not function properly without cookies." },
            { title: "6. Third-Party Links", body: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies." },
            { title: "7. Your Rights", body: "You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at contact@ignara.ai." },
            { title: "8. Changes to This Policy", body: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated date." },
            { title: "9. Contact Us", body: "If you have questions about this Privacy Policy, please contact us at contact@ignara.ai or visit ignara.ai." },
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
