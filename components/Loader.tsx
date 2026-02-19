import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32 w-full min-h-[400px]">
      <div className="relative">
        
        {/* Steam Animation */}
        <div className="absolute -top-8 left-4 w-2 h-6 bg-gray-300/60 rounded-full blur-[2px] animate-[ping_1.5s_ease-out_infinite] origin-bottom"></div>
        <div className="absolute -top-10 left-9 w-2 h-8 bg-gray-300/60 rounded-full blur-[2px] animate-[ping_1.8s_ease-out_infinite] [animation-delay:0.5s] origin-bottom"></div>
        <div className="absolute -top-7 left-14 w-2 h-5 bg-gray-300/60 rounded-full blur-[2px] animate-[ping_1.2s_ease-out_infinite] [animation-delay:0.2s] origin-bottom"></div>

        {/* Pot Assembly */}
        <div className="relative z-10">
            {/* Jumping Lid */}
            <div className="w-24 h-5 bg-brand rounded-t-full mx-auto mb-[1px] relative animate-[bounce_0.4s_infinite]">
                 {/* Lid Handle */}
                 <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-3 bg-brand-black rounded-t-md"></div>
            </div>
            
            {/* Pot Body */}
            <div className="w-24 h-16 bg-brand-black rounded-b-[2rem] mx-auto flex items-center justify-center relative shadow-xl">
                {/* Reflection */}
                <div className="absolute top-2 right-4 w-2 h-8 bg-white/10 rounded-full rotate-12"></div>
            </div>

            {/* Side Handles */}
            <div className="absolute top-6 -left-3 w-4 h-6 bg-brand-black rounded-l-lg border-r-2 border-brand-black/50"></div>
            <div className="absolute top-6 -right-3 w-4 h-6 bg-brand-black rounded-r-lg border-l-2 border-brand-black/50"></div>
        </div>

        {/* Stove / Shadow */}
        <div className="w-20 h-2 bg-black/10 rounded-[100%] mx-auto mt-4 blur-sm"></div>

      </div>
      
      <div className="mt-8 flex flex-col items-center gap-1">
          <h3 className="font-display font-bold text-xl text-brand-black tracking-tight">Chef is cooking...</h3>
          <p className="text-gray-400 text-sm font-medium">Finding the best recipes for you</p>
      </div>
    </div>
  );
};

export default Loader;