import type { Metadata } from "next";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Arco Fit Gym & Wellness.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen flex flex-col">
      <Navbar activePage="privacy-policy" />

      {/* HEADER */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-b from-[#007CAF]/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
            Legal
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            Privacy <span className="text-[#007CAF]">Policy</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            Effective Date: 12/6/2024 &nbsp;|&nbsp; Last Updated: 12/6/2024
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-4 flex-grow relative z-10">
        <div className="max-w-4xl mx-auto opacity-0 animate-[fadeUp_0.8s_ease_0.8s_forwards]">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 prose prose-slate prose-p:text-slate-600 prose-headings:text-slate-900 prose-a:text-[#007CAF] hover:prose-a:text-[#0077A8] max-w-none">
            
            <p className="lead text-lg mb-8">
              Arco Fit Gym and Wellness (“Arco Fit,” “we,” “us,” or “our”) respects your privacy and is committed to protecting it through this Privacy Policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website (the “Website”) and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>

            <h2 className="text-2xl font-bold uppercase text-[#007CAF] mt-12 mb-6">1. Information We Collect</h2>
            <p>We may collect several types of information from and about visitors to our Website, including:</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1.1 Personal Information</h3>
            <p>Information that identifies you as an individual, such as:</p>
            <ul className="list-disc pl-6 mb-6 text-white/70 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and payment information</li>
              <li>Address</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">1.2 Non-Personal Information</h3>
            <p>Information that does not identify you as an individual, such as:</p>
            <ul className="list-disc pl-6 mb-6 text-white/70 space-y-1">
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Pages visited, time spent on pages, and other analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold uppercase text-[#007CAF] mt-12 mb-6">2. How We Collect Information</h2>
            <p>We collect information through the following means:</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2.1 Directly From You:</h3>
            <ul className="list-disc pl-6 mb-6 text-white/70 space-y-1">
              <li>When you fill out forms on our Website (e.g., contact forms, membership inquiries).</li>
              <li>When you subscribe to our newsletter or promotional emails.</li>
              <li>When you make a purchase or payment through the Website.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">2.2 Automatically:</h3>
            <ul className="list-disc pl-6 mb-6 text-white/70 space-y-1">
              <li>Through cookies, web beacons, and other tracking technologies.</li>
              <li>As you navigate through the Website, certain usage details and information may be collected automatically.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">2.3 From Third Parties:</h3>
            <p>We may receive information about you from third parties, such as payment processors or social media platforms if you interact with us through those channels.</p>

            <h2 className="text-2xl font-bold uppercase text-[#007CAF] mt-12 mb-6">3. How We Use Your Information</h2>
            <p>We use the information we collect about you or that you provide to:</p>
            <ul className="list-disc pl-6 mb-6 text-white/70 space-y-1">
              <li>Operate, maintain, and improve the Website.</li>
              <li>Provide services and process transactions, including memberships and purchases.</li>
              <li>Respond to your inquiries or customer service requests.</li>
              <li>Send promotional emails, newsletters, or updates about our services (you may opt-out at any time).</li>
              <li>Comply with legal and regulatory requirements.</li>
              <li>Detect, prevent, or investigate fraudulent or unauthorized activity.</li>
            </ul>

            <h2 className="text-2xl font-bold uppercase text-[#007CAF] mt-12 mb-6">4. Sharing Your Information</h2>
            <p>We do not sell or rent your personal information to third parties. However, we may share your information in the following situations:</p>

            <h3 className="text-xl font-bold mt-6 mb-3">4.1 With Service Providers:</h3>
            <p>We may share your information with trusted third-party service providers who help us operate our business, such as:</p>
            <ul className="list-disc pl-6 mb-6 text-white/70 space-y-1">
              <li>Payment processors</li>
              <li>Marketing or email service providers</li>
              <li>IT and hosting service providers</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">4.2 For Legal Reasons:</h3>
            <p>We may disclose your information if required to do so by law or if we believe such action is necessary to:</p>
            <ul className="list-disc pl-6 mb-6 text-white/70 space-y-1">
              <li>Comply with legal obligations or government requests.</li>
              <li>Protect and defend our rights or property.</li>
              <li>Prevent or investigate possible wrongdoing.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">4.3 Business Transfers:</h3>
            <p>In the event of a merger, acquisition, or sale of all or part of our business, your information may be transferred as part of that transaction.</p>

            <h2 className="text-2xl font-bold uppercase text-[#007CAF] mt-12 mb-6">5. Cookies and Tracking Technologies</h2>
            <p>Our Website uses cookies and similar technologies to enhance your browsing experience and collect information about your usage.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">5.1 What Are Cookies?</h3>
            <p>Cookies are small files placed on your device that help us understand how visitors use our Website.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">5.2 How We Use Cookies:</h3>
            <ul className="list-disc pl-6 mb-6 text-white/70 space-y-1">
              <li>To improve Website performance and user experience.</li>
              <li>To understand user behavior and preferences.</li>
              <li>To enable certain features, such as secure login or payment processing.</li>
            </ul>
            <p>You can manage or disable cookies through your browser settings. Note that disabling cookies may impact your ability to access certain features of the Website.</p>

            <h2 className="text-2xl font-bold uppercase text-[#007CAF] mt-12 mb-6">6. Data Security</h2>
            <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-bold uppercase text-[#007CAF] mt-12 mb-6">7. Your Privacy Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">7.1 Access and Update:</h3>
            <p>You may access, update, or correct your personal information by contacting us at info@arcofitgym.com.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">7.2 Opt-Out:</h3>
            <p>You can opt-out of receiving promotional communications from us by following the unsubscribe instructions in our emails or contacting us directly.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">7.3 Do Not Track Signals:</h3>
            <p>Our Website does not currently respond to browser “Do Not Track” signals.</p>

            <h2 className="text-2xl font-bold uppercase text-[#007CAF] mt-12 mb-6">8. Third-Party Links</h2>
            <p>Our Website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.</p>

            <h2 className="text-2xl font-bold uppercase text-[#007CAF] mt-12 mb-6">9. Children’s Privacy</h2>
            <p>Our Website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we learn that we have collected information from a child under 13 without parental consent, we will delete it.</p>

            <h2 className="text-2xl font-bold uppercase text-[#007CAF] mt-12 mb-6">10. Changes to This Privacy Policy</h2>
            <p>We reserve the right to update this Privacy Policy at any time. Any changes will be effective immediately upon posting on this page. The date of the last update will be reflected at the top of this policy.</p>

            <h2 className="text-2xl font-bold uppercase text-[#007CAF] mt-12 mb-6">11. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact us at:</p>
            <p className="mt-4">
              <strong>Arco Fit Gym and Wellness</strong><br />
              Email: <a href="mailto:info@arcofitgym.com" className="text-[#007CAF] hover:text-[#0077A8]">info@arcofitgym.com</a>
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
