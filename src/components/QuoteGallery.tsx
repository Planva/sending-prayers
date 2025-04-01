import React, { useState } from 'react';
import quotes from '../data/quotes.json';
import { Quote, Shuffle } from 'lucide-react';
import SocialShare from './SocialShare';

const QuoteGallery: React.FC = () => {
  const [category, setCategory] = useState<'inspirational' | 'healing' | 'strength'>('inspirational');

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
        {Object.keys(quotes).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat as 'inspirational' | 'healing' | 'strength')}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-colors ${
              category === cat
                ? 'bg-purple-600 text-white'
                : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {quotes[category].map((quote, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transform hover:scale-[1.02] transition-transform"
          >
            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mb-3 sm:mb-4" />
            <p className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">{quote.text}</p>
            <div className="flex flex-wrap justify-between items-center gap-2">
              <p className="text-sm text-gray-600 italic">- {quote.author}</p>
              <SocialShare text={`"${quote.text}" - ${quote.author}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteGallery;