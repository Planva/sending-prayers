import React from 'react';
import PrayerGenerator from '../components/PrayerGenerator';
import SEOContent from '../components/SEOContent';

const PrayerGeneratorPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Prayer Generator
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Create meaningful prayers and messages of support
        </p>
      </div>

      <PrayerGenerator />
      <SEOContent />
    </div>
  );
};

export default PrayerGeneratorPage;