import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pro: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200 px-4 py-2 rounded-full mb-6 animate-pulse-slow">
                <Crown size={16} className="text-orange-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-orange-700">Go Professional</span>
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl text-brand-black mb-6 tracking-tight">
                Unlock the full <br />
                <span className="text-brand">Flavor Experience</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8">
                Get unlimited access to premium recipes, ad-free browsing, custom meal plans, and exclusive masterclasses from top chefs.
            </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20 items-center">
            
            {/* Free Tier */}
            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-xl transition-shadow relative z-0 animate-fade-in-up delay-100">
                <h3 className="font-display font-bold text-2xl mb-2">Home Cook</h3>
                <div className="text-4xl font-black mb-6">$0<span className="text-lg font-medium text-gray-400">/mo</span></div>
                <ul className="space-y-4 mb-8">
                    {['Access to 1000+ Recipes', 'Basic Search Filters', 'Save Favorites', 'Community Access'].map(i => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-500">
                            <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Check size={12} /></div>
                            {i}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-4 rounded-xl border-2 border-brand-black text-brand-black font-bold hover:bg-gray-50 transition-colors">Current Plan</button>
            </div>

            {/* Pro Tier */}
            <div className="bg-brand-black text-white rounded-[2.5rem] p-10 shadow-2xl relative z-10 transform md:-translate-y-4 animate-fade-in-up delay-300">
                <div className="absolute top-0 right-0 bg-brand text-white px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl font-bold text-xs uppercase tracking-wider">Most Popular</div>
                <h3 className="font-display font-bold text-3xl mb-2 flex items-center gap-2"><Crown size={24} className="text-yellow-400 animate-bounce-slow" /> Pro Chef</h3>
                <div className="text-5xl font-black mb-6">$4.99<span className="text-xl font-medium text-gray-400">/mo</span></div>
                <ul className="space-y-4 mb-10">
                    {['Everything in Free', 'Unlimited Premium Recipes', 'Ad-Free Experience', 'Advanced Nutritional Data', 'Meal Planner Tool'].map(i => (
                        <li key={i} className="flex items-center gap-3 font-bold text-gray-200">
                            <div className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center"><Check size={14} /></div>
                            {i}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-4 rounded-xl bg-brand text-white font-bold hover:bg-brand-hover hover:scale-105 transition-all shadow-lg shadow-brand/25 active:scale-95">Start Free Trial</button>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-xl transition-shadow relative z-0 animate-fade-in-up delay-200">
                <h3 className="font-display font-bold text-2xl mb-2">Masterclass</h3>
                <div className="text-4xl font-black mb-6">$19.99<span className="text-lg font-medium text-gray-400">/mo</span></div>
                <ul className="space-y-4 mb-8">
                    {['Everything in Pro', 'Live Cooking Classes', '1-on-1 Chef Chat', 'Signed Cookbooks', 'Exclusive Merch'].map(i => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-500">
                            <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center"><Check size={12} /></div>
                            {i}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-4 rounded-xl border-2 border-purple-100 text-purple-600 font-bold hover:bg-purple-50 transition-colors">Learn More</button>
            </div>

        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-in-up delay-500">
            {[
                {icon: Zap, title: "Speedy Cooking", desc: "Filter by prep time to fit your busy schedule perfectly."},
                {icon: Star, title: "Top Rated", desc: "Only cook the best with our community-vetted recipe scoring."},
                {icon: Crown, title: "Exclusive Access", desc: "Get early access to new seasonal collections."}
            ].map((f, i) => (
                <div key={i} className="text-center p-6 group cursor-default">
                    <div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center text-brand-black mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300 group-hover:rotate-6">
                        <f.icon size={32} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{f.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Pro;