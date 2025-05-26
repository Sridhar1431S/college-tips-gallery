
import React from 'react';
import { PhotoCard } from './PhotoCard';
import { Photo } from './PhotoGallery';

interface PhotoGridProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, onPhotoClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-8 sm:pb-12 lg:pb-16">
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4 lg:gap-6">
        {photos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onClick={() => onPhotoClick(photo)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
