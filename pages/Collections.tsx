import React from 'react';
import { ArrowRight, Heart, Flame, UtensilsCrossed, Calendar, Sunset, Coffee } from 'lucide-react';

const Collections: React.FC = () => {
  const collections = [
    { title: "Summer Grill Master", count: 24, image: "https://plus.unsplash.com/premium_photo-1693221705527-d46b2477f5cd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", icon: Flame, color: "bg-orange-500" },
    { title: "Date Night Classics", count: 18, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800", icon: Heart, color: "bg-rose-500" },
    { title: "Healthy Meal Prep", count: 42, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800", icon: Calendar, color: "bg-green-500" },
    { title: "Comfort Soups", count: 15, image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800", icon: UtensilsCrossed, color: "bg-yellow-500" },
    { title: "Morning Boost", count: 30, image: "https://plus.unsplash.com/premium_photo-1663841017138-99e198b24b5c?q=80&w=404&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", icon: Coffee, color: "bg-blue-500" },
    { title: "Vegan Delights", count: 56, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800", icon: Sunset, color: "bg-purple-500" },
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <span className="text-brand font-bold uppercase tracking-wider text-sm mb-2 block">Curated For You</span>
            <h1 className="font-display font-black text-5xl text-brand-black mb-6">Collections</h1>
            <p className="text-gray-500 text-lg">
                Explore our hand-picked selections of recipes for every occasion, mood, and dietary need.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((col, idx) => (
                <div key={idx} className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] h-96 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
                    <img src={col.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    <div className="absolute top-6 left-6">
                        <div className={`${col.color} text-white p-3 rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                            <col.icon size={24} />
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="text-gray-300 text-sm font-bold mb-2">{col.count} Recipes</div>
                        <h3 className="font-display font-bold text-3xl text-white mb-4 leading-tight">{col.title}</h3>
                        <div className="flex items-center gap-2 text-white font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            View Collection <ArrowRight size={18} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;