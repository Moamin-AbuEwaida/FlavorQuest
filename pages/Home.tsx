import React, { useState, useEffect, useRef } from 'react';
import { fetchRecipes } from '../services/edamam';
import { Recipe, RecipeHit, SearchFilters } from '../types';
import Hero from '../components/Hero';
import RecipeCard from '../components/RecipeCard';
import RecipeModal from '../components/RecipeModal';
import Loader from '../components/Loader';
import { Star, Zap, Coffee, Quote } from 'lucide-react';

const Home: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  // Data Sections
  const [popular, setPopular] = useState<Recipe[]>([]);
  const [quick, setQuick] = useState<Recipe[]>([]);
  const [veggie, setVeggie] = useState<Recipe[]>([]);
  
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    const safeFetch = async (filters: SearchFilters) => {
        try {
            return await fetchRecipes(filters);
        } catch (e) {
            console.warn("Fetch failed", e);
            return { hits: [] as RecipeHit[] };
        }
    };

    const loadData = async () => {
      setLoading(true);
      try {
        const [popRes, quickRes, vegRes] = await Promise.all([
          safeFetch({ q: 'popular', dishType: 'Main course' }),
          safeFetch({ time: '1-20', mealType: 'Dinner' }),
          safeFetch({ health: 'vegetarian', dishType: 'Salad' }),
        ]);

        setPopular(popRes.hits.map((h: any) => h.recipe).slice(0, 5));
        setQuick(quickRes.hits.map((h: any) => h.recipe).slice(0, 4));
        setVeggie(vegRes.hits.map((h: any) => h.recipe).slice(0, 4));

      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSearch = async (term: string) => {
      setIsSearching(true);
      setSearchQuery(term);
      setLoading(true);
      try {
          const res = await fetchRecipes({ q: term });
          setSearchResults(res.hits.map(h => h.recipe));
          setTimeout(() => {
             document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
      } catch (e) { console.error(e); } 
      finally { setLoading(false); }
  };

  const clearSearch = () => {
      setIsSearching(false);
      setSearchResults([]);
      setSearchQuery('');
  };

  return (
    <div className="flex-grow">
      <Hero onSearch={handleSearch} />

      {/* Search Overlay Area */}
      {isSearching && (
           <section id="results" className="py-12 bg-brand-gray/30 min-h-[50vh] animate-fade-in">
               <div className="max-w-7xl mx-auto px-6">
                   <div className="flex justify-between items-center mb-8">
                       <h2 className="text-2xl font-display font-bold">Results for "{searchQuery}"</h2>
                       <button onClick={clearSearch} className="text-sm font-bold underline decoration-2 hover:text-brand">Clear</button>
                   </div>
                   {loading ? <Loader /> : (
                       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                           {searchResults.map((recipe, idx) => (
                               <div key={idx} className="animate-fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
                                   <RecipeCard recipe={recipe} onClick={setSelectedRecipe} />
                               </div>
                           ))}
                       </div>
                   )}
               </div>
           </section>
      )}

      {!isSearching && loading && <Loader />}

      {!isSearching && !loading && (
        <div className="space-y-24 pb-20">
          
          {/* Featured Bento Grid */}
          <section className="max-w-7xl mx-auto px-6 animate-fade-in-up delay-100">
              <div className="flex items-center gap-2 mb-8">
                  <div className="p-2 bg-tag-yellow rounded-lg"><Star size={20} className="text-brand-black" /></div>
                  <h2 className="text-3xl font-display font-extrabold">Weekly Favorites</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(100px,auto)]">
                  {/* Hero Card */}
                  {popular[0] && (
                      <div className="md:col-span-2 md:row-span-2">
                           <RecipeCard recipe={popular[0]} onClick={setSelectedRecipe} featured={true} />
                      </div>
                  )}
                  {/* Side Cards */}
                  {popular.slice(1, 3).map((recipe, idx) => (
                      <div key={idx} className="md:col-span-1">
                           <RecipeCard recipe={recipe} onClick={setSelectedRecipe} />
                      </div>
                  ))}
              </div>
          </section>

          {/* Quick Eats */}
          <section className="bg-brand-black text-white py-20 rounded-[2.5rem] mx-4 lg:mx-8 relative overflow-hidden animate-fade-in-up delay-200">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full blur-[100px] opacity-20 pointer-events-none animate-pulse-slow"></div>
               <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                   <div className="flex justify-between items-end mb-12">
                       <div>
                          <div className="flex items-center gap-2 text-brand font-bold uppercase tracking-wider text-sm mb-2">
                              <Zap size={16} /> Under 20 Mins
                          </div>
                          <h2 className="text-4xl md:text-5xl font-display font-extrabold">Need for Speed?</h2>
                       </div>
                       <button className="hidden sm:block px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-brand-black transition-all font-bold hover:scale-105 active:scale-95">
                           View All
                       </button>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                       {quick.map((recipe, idx) => (
                           <div key={idx} onClick={() => setSelectedRecipe(recipe)} className="cursor-pointer group animate-fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
                               <div className="aspect-square rounded-2xl overflow-hidden mb-4 border border-white/10 relative">
                                   <img src={recipe.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                                   <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                       {recipe.totalTime || 15}m
                                   </div>
                               </div>
                               <h3 className="font-display font-bold text-xl group-hover:text-brand transition-colors">{recipe.label}</h3>
                               <p className="text-gray-400 text-sm">{Math.round(recipe.calories / recipe.yield)} kcal</p>
                           </div>
                       ))}
                   </div>
               </div>
          </section>

          {/* Veggie Vibes */}
          <section className="max-w-7xl mx-auto px-6 animate-fade-in-up delay-300">
              <div className="flex items-center gap-2 mb-8">
                   <div className="p-2 bg-tag-green rounded-lg"><Coffee size={20} className="text-brand-black" /></div>
                   <h2 className="text-3xl font-display font-extrabold">Fresh & Green</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {veggie.map((recipe, idx) => (
                      <div key={idx} className="animate-fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
                         <RecipeCard recipe={recipe} onClick={setSelectedRecipe} />
                      </div>
                  ))}
              </div>
          </section>

          {/* Testimonials */}
          <section className="max-w-7xl mx-auto px-6 animate-fade-in-up delay-400">
             <div className="text-center mb-12">
                 <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider mb-4 border border-green-100">
                    <Quote size={14} className="fill-current" />
                    Trusted by Pros
                 </div>
                 <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-black mb-4">Chef's Corner</h2>
                 <p className="text-gray-500 max-w-2xl mx-auto text-lg">See what the culinary world is saying about their FlavorQuest experience.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                     {
                         name: "Marco Pierre White",
                         role: "3 Michelin Stars",
                         img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=300",
                         text: "Perfection is lots of little things done well. FlavorQuest gets all the little things right. It's an indispensable tool."
                     },
                     {
                         name: "Dominique Crenn",
                         role: "World's Best Female Chef",
                         img: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?auto=format&fit=crop&q=80&w=300",
                         text: "Poetic and practical. It helps me organize my chaotic thoughts into beautiful menus without the distraction of noise."
                     },
                     {
                         name: "Massimo Bottura",
                         role: "Osteria Francescana",
                         img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=300",
                         text: "Cooking is an act of love. This platform shares that love with every recipe interaction, bringing people back to the table."
                     }
                 ].map((t, i) => (
                     <div key={i} className="bg-white p-8 rounded-[2rem] shadow-bento border border-gray-100 hover:shadow-hover transition-all duration-300 hover:-translate-y-2 group">
                         <div className="flex gap-1 mb-6">
                             {[1,2,3,4,5].map(s => <Star key={s} size={18} className="text-yellow-400 fill-yellow-400" />)}
                         </div>
                         <p className="text-gray-600 font-medium text-lg mb-8 leading-relaxed italic">"{t.text}"</p>
                         <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                             <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-50 group-hover:ring-brand/10 transition-all" />
                             <div>
                                 <h4 className="font-display font-bold text-lg text-brand-black">{t.name}</h4>
                                 <p className="text-xs text-brand font-bold uppercase tracking-wider">{t.role}</p>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
          </section>

          {/* CTA */}
          <section className="px-6 animate-fade-in-up delay-500">
              <div className="max-w-4xl mx-auto bg-tag-purple rounded-[3rem] p-12 text-center relative overflow-hidden group">
                  <div className="relative z-10">
                      <h2 className="font-display font-black text-4xl md:text-6xl mb-6 text-brand-black">START COOKING BETTER.</h2>
                      <p className="text-lg font-medium text-brand-black/70 mb-8 max-w-lg mx-auto">Join 50,000+ foodies discovering new flavors every single day.</p>
                      <button className="bg-brand-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl">
                          Get Started Now
                      </button>
                  </div>
              </div>
          </section>
        </div>
      )}
      
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
};

export default Home;