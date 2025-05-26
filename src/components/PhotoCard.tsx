
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
      <div className="relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border-2 border-transparent hover:border-pink-400 p-1">
        {/* Neon glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:brightness-110 group-hover:contrast-110"
            loading="lazy"
          />
          
          {/* Neon overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="text-sm font-bold text-cyan-300 mb-2 tracking-wider uppercase">
                {photo.category}
              </div>
              <h3 className="text-xl font-black mb-3 text-pink-200 tracking-wide">
                {photo.title}
              </h3>
              <p className="text-sm text-cyan-100 font-medium leading-relaxed">
                {photo.description}
              </p>
            </div>
          </div>

          {/* Category Badge with neon effect */}
          <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-lg shadow-purple-500/50">
            {photo.category}
          </div>

          {/* Zoom Icon with neon glow */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-pink-500/50 border border-pink-300/50">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>

          {/* Corner accent lights */}
          <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-cyan-400/50 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-pink-400/50 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};
