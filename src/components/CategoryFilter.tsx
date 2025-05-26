
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
    <div className="flex flex-wrap justify-center gap-4 px-4 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            relative px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
            border-2 backdrop-blur-sm shadow-lg
            ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-blue-500/30'
                : 'bg-white/10 text-slate-200 border-blue-400/30 hover:border-blue-400 hover:text-white hover:bg-white/20 hover:shadow-blue-400/20'
            }
          `}
        >
          <span className="relative z-10 tracking-wide font-bold">
            {category}
          </span>
        </button>
      ))}
    </div>
  );
};
