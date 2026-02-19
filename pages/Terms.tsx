import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display font-black text-4xl md:text-5xl text-brand-black mb-12 text-center">Terms of Service</h1>
        <div className="space-y-10 text-gray-600 leading-relaxed text-lg">
            <section>
                <h2 className="font-display font-bold text-2xl text-brand-black mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using FlavorQuest, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            </section>
            <section>
                <h2 className="font-display font-bold text-2xl text-brand-black mb-4">2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on FlavorQuest's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
            </section>
            <section>
                <h2 className="font-display font-bold text-2xl text-brand-black mb-4">3. Disclaimer</h2>
                <p>The materials on FlavorQuest's website are provided on an 'as is' basis. FlavorQuest makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>
            <section>
                <h2 className="font-display font-bold text-2xl text-brand-black mb-4">4. Limitations</h2>
                <p>In no event shall FlavorQuest or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FlavorQuest's website, even if FlavorQuest or a FlavorQuest authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            </section>
            <section>
                <h2 className="font-display font-bold text-2xl text-brand-black mb-4">5. Governing Law</h2>
                <p>Any claim relating to FlavorQuest's website shall be governed by the laws of the State of California without regard to its conflict of law provisions.</p>
            </section>
            <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Terms;