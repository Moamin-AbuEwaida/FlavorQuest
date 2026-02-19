import React from 'react';
import { Users, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-display font-black text-5xl text-brand-black mb-6">We Are FlavorQuest.</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            On a mission to bring the joy of cooking back into homes around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-brand-gray/30 rounded-[2rem] text-center hover:bg-brand-gray/50 transition-colors animate-fade-in-up delay-100 group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand shadow-sm group-hover:scale-110 transition-transform">
              <Globe size={28} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2 text-brand-black">Global Flavors</h3>
            <p className="text-sm text-gray-500 font-medium">Connecting you with cuisines from every corner of the earth.</p>
          </div>
          <div className="p-8 bg-brand-gray/30 rounded-[2rem] text-center hover:bg-brand-gray/50 transition-colors animate-fade-in-up delay-200 group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand shadow-sm group-hover:scale-110 transition-transform">
              <Users size={28} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2 text-brand-black">Community First</h3>
            <p className="text-sm text-gray-500 font-medium">Built by foodies, for foodies. Share, learn, and grow together.</p>
          </div>
          <div className="p-8 bg-brand-gray/30 rounded-[2rem] text-center hover:bg-brand-gray/50 transition-colors animate-fade-in-up delay-300 group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand shadow-sm group-hover:scale-110 transition-transform">
              <Heart size={28} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2 text-brand-black">Made with Love</h3>
            <p className="text-sm text-gray-500 font-medium">Every feature is designed to make your kitchen experience better.</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-gray-600 leading-loose text-lg animate-fade-in-up delay-400">
          <h2 className="font-display font-bold text-3xl text-brand-black mb-6 text-center">Our Story</h2>
          <p className="mb-6">
            Founded in 2024, FlavorQuest started as a simple idea: what if finding a recipe was as enjoyable as eating the meal? We were tired of cluttered websites, endless scrolling through life stories, and pop-ups. We wanted a clean, beautiful, and efficient way to decide <span className="font-bold text-brand-black">"What's for dinner?"</span>
          </p>
          <p>
            Today, we help thousands of home cooks discover new favorites, organize their meal plans, and connect with a community of passionate food lovers. Whether you are a beginner looking for quick eats or a pro chef experimenting with fusion cuisine, FlavorQuest is your kitchen companion.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;