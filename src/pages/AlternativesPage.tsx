import React from 'react';
import AlternativeExpressions from '../components/AlternativeExpressions';

const AlternativesPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Alternative Ways to Express Support
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Different ways to show you care and offer support
        </p>
      </div>

      <AlternativeExpressions />
    </div>
  );
};

export default AlternativesPage;