import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

const SEOContent: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="prose lg:prose-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How to Express Your Support and Prayers
        </h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            For Those Who Are Sick
          </h3>
          <ul className="list-none space-y-3">
            <li className="flex items-center">
              <Heart className="w-5 h-5 text-purple-500 mr-2" />
              "Sending prayers for your swift recovery"
            </li>
            <li className="flex items-center">
              <Sparkles className="w-5 h-5 text-purple-500 mr-2" />
              "May healing light surround you"
            </li>
            <li className="flex items-center">
              <Star className="w-5 h-5 text-purple-500 mr-2" />
              "Keeping you in my thoughts as you heal"
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Alternative Ways to Show Support
          </h3>
          <ul className="list-none space-y-3">
            <li>"Sending healing thoughts your way"</li>
            <li>"Holding you in my heart during this time"</li>
            <li>"Wishing you strength and comfort"</li>
            <li>"Sending positive energy for healing"</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            When to Send Prayers
          </h3>
          <p className="text-gray-700 mb-4">
            Sending prayers is a meaningful way to show support during:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Times of illness or recovery</li>
            <li>Moments of challenge or difficulty</li>
            <li>Periods of grief or loss</li>
            <li>Celebrations and joyful occasions</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SEOContent;