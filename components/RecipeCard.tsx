import React from 'react';
import { Recipe } from '../types';
import { Clock, Flame, ArrowUpRight } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
  featured?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick, featured = false }) => {
  const calories = Math.round(recipe.calories / recipe.yield);
  const time = recipe.totalTime > 0 ? recipe.totalTime : 30;
  
  // Random pastel color for tag background
  const colors = ['bg-tag-purple', 'bg-tag-green', 'bg-tag-blue', 'bg-tag-yellow', 'bg-tag-pink'];
  const tagColor = colors[Math.floor(recipe.label.length % colors.length)];

  return (
    <div 
      onClick={() => onClick(recipe)}
      className={`group relative cursor-pointer flex flex-col h-full bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 ${featured ? 'md:row-span-2' : ''}`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden w-full ${featured ? 'h-[300px] md:h-[400px]' : 'aspect-[4/3]'} bg-gray-100`}>
        <img
          src={recipe.images.REGULAR?.url || recipe.image}
          alt={recipe.label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Floating Time Pill */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-brand-black flex items-center gap-1 shadow-sm z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Clock size={12} /> {time} min
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
         <div className="flex flex-wrap gap-2 mb-3">
             <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-brand-black/70 ${tagColor}`}>
                {recipe.cuisineType?.[0] || 'Fusion'}
             </span>
             {recipe.dietLabels?.[0] && (
                 <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 border border-gray-200">
                    {recipe.dietLabels[0]}
                 </span>
             )}
         </div>

         <h3 className={`font-display font-bold text-brand-black group-hover:text-brand transition-colors leading-tight mb-2 ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
             {recipe.label}
         </h3>
         
         <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
             <div className="flex items-center gap-1 text-gray-400 text-xs font-semibold">
                <Flame size={14} className="text-brand" /> {calories} kcal
             </div>
             <button className="w-8 h-8 rounded-full bg-brand-gray flex items-center justify-center text-brand-black group-hover:bg-brand group-hover:text-white transition-all duration-300 group-hover:scale-110">
                 <ArrowUpRight size={16} />
             </button>
         </div>
      </div>
    </div>
  );
};

export default RecipeCard;