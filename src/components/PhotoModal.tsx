
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-6xl w-full max-h-[90vh] bg-white/95 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl animate-scale-in border border-gray-200">
        {/* Close Button */}
        <button
          onClick={handleCloseClick}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg border border-gray-300 group"
          type="button"
        >
          <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="lg:w-2/3 bg-gray-50 p-4">
            <div className="relative rounded-lg overflow-hidden bg-white shadow-inner">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 lg:h-96 object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/3 p-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full uppercase tracking-wide shadow-sm">
                {photo.category}
              </span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {photo.title}
            </h2>
            
            <p className="text-gray-700 text-base leading-relaxed mb-8 font-medium">
              {photo.description}
            </p>

            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-600 font-semibold">CollegeTips Gallery</span>
                <span className="text-gray-600 font-medium">🚀 Empowering Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
