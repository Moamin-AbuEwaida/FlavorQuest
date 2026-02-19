import React from 'react';
import { Recipe } from '../types';
import { X, Clock, Flame, Users, ExternalLink, CheckCircle } from 'lucide-react';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-brand-black/20 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm"
        >
          <X size={20} />
        </button>

        {/* Image - Mobile Top / Desktop Left */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 relative">
          <img 
            src={recipe.images.LARGE?.url || recipe.images.REGULAR?.url || recipe.image} 
            alt={recipe.label}
            className="w-full h-full object-cover"
          />
           {/* Gradient Overlay for Mobile Text Readability if needed, though we use clean section below */}
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col bg-white overflow-y-auto no-scrollbar">
            <div className="p-8">
                <span className="text-brand font-bold uppercase tracking-wider text-xs mb-2 block">{recipe.cuisineType?.[0]} Cuisine</span>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brand-black leading-tight mb-4">
                    {recipe.label}
                </h2>
                
                {/* Stats Row */}
                <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-6">
                    <div className="flex flex-col">
                        <span className="text-gray-400 text-xs font-bold uppercase">Time</span>
                        <div className="flex items-center gap-1 font-bold text-lg">
                            <Clock size={18} className="text-brand" /> {recipe.totalTime || 30}m
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-400 text-xs font-bold uppercase">Calories</span>
                        <div className="flex items-center gap-1 font-bold text-lg">
                            <Flame size={18} className="text-brand" /> {Math.round(recipe.calories / recipe.yield)}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-400 text-xs font-bold uppercase">Servings</span>
                        <div className="flex items-center gap-1 font-bold text-lg">
                            <Users size={18} className="text-brand" /> {recipe.yield}
                        </div>
                    </div>
                </div>

                {/* Ingredients */}
                <h3 className="font-display font-bold text-xl mb-4">Ingredients</h3>
                <div className="space-y-3 mb-8">
                    {recipe.ingredientLines.map((line, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                            <CheckCircle size={18} className="text-brand/50 mt-1 flex-shrink-0" />
                            <p className="text-gray-600 font-medium leading-relaxed">{line}</p>
                        </div>
                    ))}
                </div>

                {/* Health Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {recipe.healthLabels.slice(0, 5).map(label => (
                        <span key={label} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-gray-500">
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            {/* Sticky Footer Button */}
            <div className="mt-auto p-6 border-t border-gray-100 bg-white sticky bottom-0">
                <a 
                    href={recipe.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-brand-black text-white py-4 rounded-xl font-bold hover:bg-brand transition-colors text-lg"
                >
                    View Full Instructions <ExternalLink size={18} />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;