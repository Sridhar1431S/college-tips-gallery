
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
    <div className="flex flex-wrap justify-center gap-3 px-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105
            ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-orange-500 via-red-500 to-green-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-green-100 shadow-md hover:shadow-lg border-2 border-transparent hover:border-orange-200'
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
