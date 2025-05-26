
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
            relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1
            border-2 backdrop-blur-sm
            ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white border-transparent shadow-2xl shadow-purple-500/50 animate-pulse'
                : 'bg-black/30 text-cyan-200 border-cyan-400/50 hover:border-pink-400 hover:text-pink-300 hover:shadow-xl hover:shadow-cyan-400/30'
            }
            before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-cyan-500 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10
          `}
        >
          <span className="relative z-10 tracking-wide font-extrabold">
            {category}
          </span>
          {selectedCategory === category && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 blur-xl"></div>
          )}
        </button>
      ))}
    </div>
  );
};
