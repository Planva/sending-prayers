import React from 'react';
import ImageGallery from '../components/ImageGallery';

const GalleryPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Inspiring Images
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Share beautiful images that express your prayers and support
        </p>
      </div>

      <ImageGallery />
    </div>
  );
};

export default GalleryPage;