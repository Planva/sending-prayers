import React from 'react';
import QuoteGallery from '../components/QuoteGallery';

const QuotesPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Inspirational Quotes
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find and share meaningful quotes for every situation
        </p>
      </div>

      <QuoteGallery />
    </div>
  );
};

export default QuotesPage;