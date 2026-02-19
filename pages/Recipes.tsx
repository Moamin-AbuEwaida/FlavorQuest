import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../services/edamam';
import { Recipe, SearchFilters } from '../types';
import RecipeCard from '../components/RecipeCard';
import RecipeModal from '../components/RecipeModal';
import Loader from '../components/Loader';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [query, setQuery] = useState('Chicken'); // Default content
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6; // 2 rows * 3 cards
  
  // Filters
  const [filters, setFilters] = useState<SearchFilters>({
    mealType: '',
    cuisineType: '',
    dishType: ''
  });

  const performSearch = async () => {
    setLoading(true);
    setCurrentPage(1); // Reset to first page on new search
    try {
      const res = await fetchRecipes({ 
        q: query,
        ...filters
      });
      setRecipes(res.hits.map(h => h.recipe));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    performSearch();
  }, []); // Initial load

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Pagination Logic
  const totalPages = Math.ceil(recipes.length / ITEMS_PER_PAGE);
  const displayedRecipes = recipes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Area */}
        <div className="mb-8 animate-fade-in-up">
            <h1 className="font-display font-black text-4xl md:text-5xl text-brand-black mb-4">Discover Recipes</h1>
            <p className="text-gray-500">Search over 2.3 million recipes across the globe.</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center animate-fade-in-up delay-100">
             <div className="relative flex-grow w-full">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                 <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && performSearch()}
                    placeholder="What are you craving?" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 font-medium outline-none focus:border-brand-black transition-colors"
                 />
             </div>
             
             {/* Simple Dropdowns */}
             <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-1">
                 <select 
                    onChange={(e) => handleFilterChange('mealType', e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-bold text-sm text-gray-600 outline-none focus:border-brand-black cursor-pointer hover:bg-gray-100 transition-colors"
                 >
                     <option value="">Meal Type</option>
                     <option value="Breakfast">Breakfast</option>
                     <option value="Lunch">Lunch</option>
                     <option value="Dinner">Dinner</option>
                     <option value="Snack">Snack</option>
                 </select>
                 
                 <select 
                    onChange={(e) => handleFilterChange('cuisineType', e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-bold text-sm text-gray-600 outline-none focus:border-brand-black cursor-pointer hover:bg-gray-100 transition-colors"
                 >
                     <option value="">Cuisine</option>
                     <option value="Italian">Italian</option>
                     <option value="American">American</option>
                     <option value="Asian">Asian</option>
                     <option value="Mexican">Mexican</option>
                     <option value="Indian">Indian</option>
                 </select>

                 <button 
                    onClick={performSearch}
                    className="bg-brand-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-brand transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand/20"
                 >
                     Search
                 </button>
             </div>
        </div>

        {/* Results */}
        {loading ? (
            <Loader />
        ) : (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {displayedRecipes.length > 0 ? (
                        displayedRecipes.map((recipe, idx) => (
                            <div key={`${recipe.uri}-${currentPage}`} className="animate-fade-in-up" style={{animationDelay: `${idx * 50}ms`}}>
                                <RecipeCard recipe={recipe} onClick={setSelectedRecipe} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center animate-fade-in">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                                <Search size={32} className="text-gray-400" />
                            </div>
                            <h3 className="font-display font-bold text-xl text-gray-400">No recipes found</h3>
                            <p className="text-gray-400 text-sm mt-1">Try adjusting your search terms</p>
                        </div>
                    )}
                </div>

                {/* Pagination Controls */}
                {recipes.length > 0 && (
                    <div className="flex justify-center items-center gap-4 animate-fade-in">
                        <button 
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm text-brand-black"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        
                        <div className="font-bold text-gray-500">
                            Page <span className="text-brand-black">{currentPage}</span> of {totalPages}
                        </div>
                        
                        <button 
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm text-brand-black"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </>
        )}
      </div>

      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
};

export default Recipes;