
import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-2 sm:px-4 mb-8 sm:mb-12 lg:mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            relative px-3 py-2 sm:px-4 sm:py-3 lg:px-8 lg:py-4 rounded-lg sm:rounded-xl 
            font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 
            transform hover:scale-105 hover:-translate-y-1 border-2 backdrop-blur-sm shadow-lg
            active:scale-95 touch-manipulation
            ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-blue-500/30'
                : 'bg-white/10 text-slate-200 border-blue-400/30 hover:border-blue-400 hover:text-white hover:bg-white/20 hover:shadow-blue-400/20'
            }
          `}
        >
          <span className="relative z-10 tracking-wide font-bold whitespace-nowrap">
            {category}
          </span>
        </button>
      ))}
    </div>
  );
};
