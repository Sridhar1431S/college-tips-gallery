
import React from 'react';
import { Photo } from './PhotoGallery';

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
  index: number;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick, index }) => {
  return (
    <div
      className="break-inside-avoid cursor-pointer group"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
        <div className="relative overflow-hidden">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="text-xs font-medium text-orange-300 mb-1">
                {photo.category}
              </div>
              <h3 className="text-lg font-bold mb-2">{photo.title}</h3>
              <p className="text-sm text-gray-200 opacity-90">
                {photo.description}
              </p>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            {photo.category}
          </div>

          {/* Zoom Icon */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
