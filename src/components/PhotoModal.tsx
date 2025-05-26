
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-sm sm:max-w-2xl lg:max-w-6xl max-h-[95vh] sm:max-h-[90vh] bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl animate-scale-in border border-gray-200">
        {/* Close Button */}
        <button
          onClick={handleCloseClick}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg border border-gray-300 group touch-manipulation active:scale-95"
          type="button"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row overflow-hidden">
          {/* Image */}
          <div className="lg:w-2/3 bg-gray-50 p-2 sm:p-4">
            <div className="relative rounded-lg overflow-hidden bg-white shadow-inner">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 sm:h-64 lg:h-96 object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/3 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white overflow-y-auto">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-full uppercase tracking-wide shadow-sm">
                {photo.category}
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              {photo.title}
            </h2>
            
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-medium">
              {photo.description}
            </p>

            <div className="pt-4 sm:pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm gap-2">
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
