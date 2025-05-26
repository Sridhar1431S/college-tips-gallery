
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="lg:w-2/3 bg-gray-100">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/3 p-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-green-100 text-orange-700 text-sm font-medium rounded-full">
                {photo.category}
              </span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {photo.title}
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              {photo.description}
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>CollegeTips Gallery</span>
                <span>🚀 Empowering Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
