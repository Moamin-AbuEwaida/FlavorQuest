import React, { useState } from 'react';
import {
    ArrowRight, Star, TrendingUp,
    Coffee, Leaf, Drumstick, CakeSlice, Fish, Pizza, Soup, Utensils
} from 'lucide-react';

interface HeroProps {
    onSearch: (term: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (term.trim()) onSearch(term);
    };

    const categories = [
        { name: 'Breakfast', icon: Coffee, color: 'bg-orange-100 text-orange-600 border-orange-200' },
        { name: 'Vegan', icon: Leaf, color: 'bg-green-100 text-green-600 border-green-200' },
        { name: 'Meat', icon: Drumstick, color: 'bg-red-100 text-red-600 border-red-200' },
        { name: 'Dessert', icon: CakeSlice, color: 'bg-pink-100 text-pink-600 border-pink-200' },
        { name: 'Seafood', icon: Fish, color: 'bg-blue-100 text-blue-600 border-blue-200' },
        { name: 'Italian', icon: Pizza, color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
        { name: 'Asian', icon: Soup, color: 'bg-rose-100 text-rose-600 border-rose-200' },
        { name: 'Lunch', icon: Utensils, color: 'bg-purple-100 text-purple-600 border-purple-200' }
    ];

    return (
        <section className="pt-28 pb-10 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">

            {/* Split Hero Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">

                {/* Left: Text Content */}
                <div className="relative z-10 flex flex-col gap-6 text-center lg:text-left pt-6 lg:pt-0 order-2 lg:order-1">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 self-center lg:self-start bg-brand-gray px-4 py-2 rounded-full border border-gray-200 animate-fade-in-up">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">#1 Food App</span>
                    </div>

                    <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-tighter text-brand-black leading-[0.95] animate-fade-in-up delay-100">
                        MASTER THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">KITCHEN.</span>
                    </h1>

                    <p className="text-lg text-gray-500 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-200">
                        Unlock 10,000+ curated recipes. From quick 15-minute meals to gourmet masterpieces. What are we cooking today?
                    </p>

                    {/* Search Bar */}
                    <form onSubmit={handleSubmit} className="relative w-full max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-300">
                        <div className="relative group transition-transform duration-300 hover:scale-[1.02]">
                            <input
                                type="text"
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
                                placeholder="Try 'Avocado Toast'..."
                                className="w-full bg-white border-2 border-gray-100 rounded-2xl py-5 pl-6 pr-20 text-lg font-bold outline-none focus:border-brand-black transition-all shadow-bento placeholder:text-gray-300 placeholder:font-normal"
                            />
                            <button type="submit" className="absolute right-2 top-2 bottom-2 bg-brand-black text-white w-14 rounded-xl flex items-center justify-center hover:bg-brand hover:scale-105 transition-all shadow-lg active:scale-95">
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </form>

                    {/* Trust Indicators */}
                    <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 animate-fade-in-up delay-400">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                            ))}
                        </div>
                        <div className="text-sm font-bold text-gray-400">
                            <span className="text-brand-black">50k+</span> happy cooks
                        </div>
                    </div>
                </div>

                {/* Right: Visual Collage */}
                <div className="relative h-[400px] lg:h-[650px] w-full animate-fade-in delay-200 order-1 lg:order-2">
                    {/* Blob Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand/5 to-orange-100/50 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

                    {/* Main Large Image */}
                    <div className="absolute top-0 right-0 w-full h-full lg:w-[90%] lg:h-[85%] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white rotate-3 hover:rotate-1 transition-all duration-700 ease-out group animate-float">
                        <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" alt="Hero Dish" />

                        {/* Inner Badge */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-1">
                            <TrendingUp size={16} className="text-brand" /> Trending
                        </div>
                    </div>

                    {/* Floating Card: Rating */}
                    <div className="hidden sm:block absolute bottom-10 left-0 lg:bottom-20 lg:left-4 bg-white p-4 lg:p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-[200px] lg:max-w-[220px] border border-gray-50 animate-float-delayed">
                        <div className="flex gap-1 text-yellow-400 mb-2">
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                        </div>
                        <p className="font-display font-bold text-lg leading-tight mb-1">"Best recipe app ever!"</p>
                        <p className="text-xs text-gray-400 font-bold">— Sarah J.</p>
                    </div>

                    {/* Floating Card: Ingredient */}
                    <div className="absolute top-10 -left-4 lg:top-20 lg:-left-8 bg-white p-3 rounded-2xl shadow-xl border border-gray-50 rotate-[-6deg] hover:rotate-0 transition-transform animate-float">
                        <img src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl object-cover mb-2" />
                        <div className="text-center font-bold text-xs">Fresh Veg</div>
                    </div>
                </div>
            </div>

            {/* Modern Icon Category Slider */}
            <div className="border-t border-gray-100 pt-8 animate-fade-in-up delay-500">
                <div className="flex justify-between items-end mb-6 px-2">
                    <h3 className="font-display font-bold text-xl text-brand-black">Browse Categories</h3>
                </div>

                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => onSearch(cat.name)}
                            className={`snap-start flex-shrink-0 flex flex-col items-center justify-center w-28 h-28 rounded-3xl border transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 group ${cat.color} bg-opacity-50 hover:bg-opacity-100`}
                        >
                            <div className="bg-white p-3 rounded-full shadow-sm mb-2 group-hover:shadow-md transition-all group-hover:scale-110">
                                <cat.icon size={24} className="opacity-90" />
                            </div>
                            <span className="font-display font-bold text-sm tracking-wide">{cat.name}</span>
                        </button>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Hero;