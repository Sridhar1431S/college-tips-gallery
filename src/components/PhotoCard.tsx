
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
      <div className="relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-white/95 backdrop-blur-sm border border-gray-200 hover:border-blue-300 p-2 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20">
        {/* Professional glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        
        <div className="relative overflow-hidden rounded-xl bg-white">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Professional overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="text-sm font-bold text-blue-300 mb-2 tracking-wider uppercase">
                {photo.category}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide">
                {photo.title}
              </h3>
              <p className="text-sm text-slate-200 font-medium leading-relaxed">
                {photo.description}
              </p>
            </div>
          </div>

          {/* Category Badge with professional styling */}
          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            {photo.category}
          </div>

          {/* Zoom Icon with professional styling */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-slate-900/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg border border-slate-300/20">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>

          {/* Corner accent lights - professional */}
          <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-blue-400/30 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-indigo-400/30 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};
