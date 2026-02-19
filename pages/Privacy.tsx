import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display font-black text-4xl md:text-5xl text-brand-black mb-12 text-center">Privacy Policy</h1>
        <div className="space-y-10 text-gray-600 leading-relaxed text-lg">
            <section>
                <h2 className="font-display font-bold text-2xl text-brand-black mb-4">1. Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide. We also automatically collect log data when you use our services.</p>
            </section>
            <section>
                <h2 className="font-display font-bold text-2xl text-brand-black mb-4">2. How We Use Information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect FlavorQuest and our users. We also use this information to offer you tailored content – like giving you more relevant recipe recommendations and saving your collections.</p>
            </section>
            <section>
                <h2 className="font-display font-bold text-2xl text-brand-black mb-4">3. Cookies</h2>
                <p>We use cookies and similar technologies to collect information about your activity, browser, and device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
            </section>
            <section>
                <h2 className="font-display font-bold text-2xl text-brand-black mb-4">4. Data Security</h2>
                <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
            </section>
            <section>
                <h2 className="font-display font-bold text-2xl text-brand-black mb-4">5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at <span className="font-bold text-brand">support@flavorquest.com</span>.</p>
            </section>
            <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Privacy;