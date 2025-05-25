
import React, { useState, useMemo } from 'react';
import { PhotoGrid } from './PhotoGrid';
import { CategoryFilter } from './CategoryFilter';
import { PhotoModal } from './PhotoModal';

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

const photos: Photo[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    alt: 'Team collaboration',
    category: 'Team Vibes',
    title: 'Brainstorming Session',
    description: 'Our team coming together to create amazing content strategies'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop',
    alt: 'Creative workspace',
    category: 'Creative Campaigns',
    title: 'Design Sprint',
    description: 'Late night creative sessions fuel our best campaign ideas'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
    alt: 'Team celebration',
    category: 'Work Hard, Play Hard',
    title: 'Launch Party',
    description: 'Celebrating another successful campaign launch with the team'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=500&fit=crop',
    alt: 'Behind the scenes coding',
    category: 'Behind-The-Scenes',
    title: 'Code & Coffee',
    description: 'Building the future of college tips, one line of code at a time'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
    alt: 'Creative process',
    category: 'Creative Campaigns',
    title: 'Visual Strategy',
    description: 'Crafting compelling visuals that resonate with students'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop',
    alt: 'Remote work setup',
    category: 'Team Vibes',
    title: 'Remote Collaboration',
    description: 'Staying connected and productive from anywhere'
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop',
    alt: 'Innovation session',
    category: 'Behind-The-Scenes',
    title: 'Innovation Lab',
    description: 'Where bright ideas turn into game-changing solutions'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=500&fit=crop',
    alt: 'Tech infrastructure',
    category: 'Behind-The-Scenes',
    title: 'Tech Stack',
    description: 'The powerful technology that drives our platform'
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=600&fit=crop',
    alt: 'Team event',
    category: 'Work Hard, Play Hard',
    title: 'Team Building',
    description: 'Building stronger connections through fun activities'
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
    alt: 'Office space',
    category: 'Team Vibes',
    title: 'Creative Space',
    description: 'Our inspiring workspace where magic happens daily'
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=600&h=500&fit=crop',
    alt: 'Nature inspiration',
    category: 'Creative Campaigns',
    title: 'Natural Inspiration',
    description: 'Finding creative inspiration in the world around us'
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=600&h=400&fit=crop',
    alt: 'Team spirit',
    category: 'Work Hard, Play Hard',
    title: 'Adventure Day',
    description: 'Team adventures that strengthen our bonds and creativity'
  }
];

const categories = ['All', 'Team Vibes', 'Creative Campaigns', 'Work Hard, Play Hard', 'Behind-The-Scenes'];

export const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'All') return photos;
    return photos.filter(photo => photo.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          CollegeTips Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Dive into our vibrant world of creativity, teamwork, and innovation! ✨
        </p>
      </div>

      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Photo Grid */}
      <PhotoGrid
        photos={filteredPhotos}
        onPhotoClick={setSelectedPhoto}
      />

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
};
