
import React, { useEffect } from 'react';
import { Photo } from './PhotoGallery';

interface PhotoModalProps {
  photo: Photo;
  onClose: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-6xl w-full max-h-[90vh] bg-gradient-to-br from-purple-900/95 to-cyan-900/95 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl animate-scale-in border-2 border-pink-400/30">
        {/* Neon glow around modal */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl -z-10"></div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:from-pink-400 hover:to-purple-400 transition-all duration-200 shadow-lg shadow-pink-500/50 border border-pink-300/50 group"
        >
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="lg:w-2/3 bg-gradient-to-br from-purple-800/50 to-cyan-800/50 p-2">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 lg:h-96 object-cover"
              />
              {/* Image border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30 pointer-events-none"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/3 p-8 relative">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-r-3xl"></div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-black rounded-full uppercase tracking-wider shadow-lg shadow-cyan-500/30">
                  {photo.category}
                </span>
              </div>
              
              <h2 className="text-4xl font-black text-transparent bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text mb-6 tracking-wide">
                {photo.title}
              </h2>
              
              <p className="text-cyan-100 text-lg leading-relaxed font-medium mb-8">
                {photo.description}
              </p>

              <div className="pt-6 border-t border-pink-400/30">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-pink-300 font-bold tracking-wider">CollegeTips Gallery</span>
                  <span className="text-cyan-300 font-bold">🚀 Empowering Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
