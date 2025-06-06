
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
    src: '/lovable-uploads/93457196-0f44-4257-a709-2d8c353dabaa.png',
    alt: 'Anniversary celebration cake',
    category: 'Work Hard, Play Hard',
    title: 'Anniversary Celebration',
    description: 'Celebrating another milestone with our amazing CollegeTips family! 🎂'
  },
  {
    id: '2',
    src: '/lovable-uploads/67de4d72-a7d0-4ff0-85b7-b8a08302339d.png',
    alt: 'Team presentation meeting',
    category: 'Team Vibes',
    title: 'Strategy Session',
    description: 'Our team collaborating on the next big initiatives for students'
  },
  {
    id: '3',
    src: '/lovable-uploads/346a8d62-b83e-4aaf-a7dd-3334f434fd07.png',
    alt: 'Creative office space',
    category: 'Behind-The-Scenes',
    title: 'Our Creative Hub',
    description: 'Where all the magic happens - our vibrant workspace'
  },
  {
    id: '4',
    src: '/lovable-uploads/82736568-ee56-42eb-80b3-cda674bbef41.png',
    alt: 'Team playing foosball',
    category: 'Work Hard, Play Hard',
    title: 'Game Time',
    description: 'Taking a fun break with some competitive foosball action!'
  },
  {
    id: '5',
    src: '/lovable-uploads/1b72d253-cb61-4aa1-8588-c6f64c289529.png',
    alt: 'Team celebration with cake',
    category: 'Work Hard, Play Hard',
    title: 'Team Celebration',
    description: 'Celebrating our wins together - because success tastes sweeter when shared!'
  },
  {
    id: '6',
    src: '/lovable-uploads/d29a31cc-e645-4e1c-b038-8104780461ed.png',
    alt: 'Team working together',
    category: 'Team Vibes',
    title: 'Collaborative Spirit',
    description: 'Working together to create amazing content for students across India'
  },
  {
    id: '7',
    src: '/lovable-uploads/c83686aa-fb78-4694-97be-52b8ce0501a2.png',
    alt: 'Modern workspace',
    category: 'Behind-The-Scenes',
    title: 'Innovation Space',
    description: 'Our modern workspace where creativity meets productivity'
  },
  {
    id: '8',
    src: '/lovable-uploads/c74b607d-0566-4f9d-aba2-9f143fc7793b.png',
    alt: 'Team meeting discussion',
    category: 'Team Vibes',
    title: 'Brainstorming Session',
    description: 'Deep discussions about how to better serve our student community'
  },
  {
    id: '9',
    src: '/lovable-uploads/cb5f8f2d-a42f-4ce3-8fdc-1869a327b625.png',
    alt: 'Fun team photo with board',
    category: 'Creative Campaigns',
    title: 'Brand Photoshoot',
    description: 'Creating amazing content that represents the CollegeTips spirit!'
  },
  {
    id: '10',
    src: '/lovable-uploads/9d3ee914-49dc-4d6e-bc2e-ab226226032b.png',
    alt: 'Team with drinks outdoor',
    category: 'Work Hard, Play Hard',
    title: 'Team Outing',
    description: 'Refreshing team moments that fuel our creativity and bond'
  },
  {
    id: '11',
    src: '/lovable-uploads/f1669744-a2f9-4e98-b2c7-b3732dce2342.png',
    alt: 'Speaking at event',
    category: 'Creative Campaigns',
    title: 'Campus Event',
    description: 'Sharing knowledge and inspiring students at campus events'
  },
  {
    id: '12',
    src: '/lovable-uploads/56e12101-5e98-4135-8109-ef5178be196e.png',
    alt: 'University seminar',
    category: 'Creative Campaigns',
    title: 'Student Seminar',
    description: 'Connecting with students and sharing valuable insights for their future'
  },
  {
    id: '13',
    src: '/lovable-uploads/b6b2a6db-0afc-4e3a-9159-65e377585a5c.png',
    alt: 'Casual team discussion',
    category: 'Behind-The-Scenes',
    title: 'Casual Conversations',
    description: 'The best ideas often come from our most relaxed conversations'
  },
  {
    id: '14',
    src: '/lovable-uploads/2a4a560b-4c8c-48dc-83b9-92ffbf015573.png',
    alt: 'Impact infographic',
    category: 'Creative Campaigns',
    title: 'Our Impact Story',
    description: 'Showcasing how we\'ve touched millions of student lives across India'
  },
  {
    id: '15',
    src: '/lovable-uploads/565d956e-2e95-4dad-bf36-bb1318e98abe.png',
    alt: 'Team at startup wall',
    category: 'Team Vibes',
    title: 'Startup Vibes',
    description: 'Proud to be India\'s coolest startup focused on student success!'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 sm:w-54 sm:h-54 lg:w-72 lg:h-72 bg-slate-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative text-center py-8 sm:py-12 lg:py-16 px-2 sm:px-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl font-black bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-300 bg-clip-text text-transparent mb-3 sm:mb-4 lg:mb-6 tracking-wider drop-shadow-2xl">
          CollegeTips
        </h1>
        <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2 sm:mb-3 lg:mb-4">
          PROFESSIONAL GALLERY
        </h2>
        <p className="text-sm sm:text-lg lg:text-xl text-slate-200 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto font-medium tracking-wide px-4">
          Experience our journey of empowering students across India! 🌟
        </p>
        
        {/* Professional border decoration */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-slate-500 shadow-lg"></div>
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
