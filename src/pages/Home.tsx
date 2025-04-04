import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Image, Quote, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Share Your Prayers and Support Messages
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Express your care and support with thoughtfully crafted prayers and messages for healing, strength, and comfort
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link
          to="/create-prayer-messages"
          className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
          aria-label="Create personalized prayers with our Prayer Generator"
        >
          <Heart className="w-12 h-12 text-purple-500 mb-4" aria-hidden="true" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Prayer Generator</h2>
          <p className="text-gray-600">Create personalized prayers for any situation</p>
        </Link>

        <Link
          to="/sending-prayers-images"
          className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
          aria-label="Browse our inspiring gallery of prayer images"
        >
          <Image className="w-12 h-12 text-purple-500 mb-4" aria-hidden="true" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Inspiring Gallery</h2>
          <p className="text-gray-600">Beautiful images to share with your prayers</p>
        </Link>

        <Link
          to="/inspirational-prayer-quotes"
          className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
          aria-label="Find inspirational quotes for every moment"
        >
          <Quote className="w-12 h-12 text-purple-500 mb-4" aria-hidden="true" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Inspirational Quotes</h2>
          <p className="text-gray-600">Wisdom and encouragement for every moment</p>
        </Link>

        <Link
          to="/alternatives"
          className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
          aria-label="Discover alternative ways to express your support"
        >
          <Sparkles className="w-12 h-12 text-purple-500 mb-4" aria-hidden="true" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Alternative Expressions</h2>
          <p className="text-gray-600">Different ways to show you care</p>
        </Link>
      </div>

      <section className="bg-white rounded-xl shadow-lg p-8 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Send Prayers and Support Messages?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Show Support</h3>
            <p className="text-gray-600">Let others know they're not alone during difficult times</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Spread Hope</h3>
            <p className="text-gray-600">Share messages of encouragement and possibility</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Express Care</h3>
            <p className="text-gray-600">Communicate your love and concern meaningfully</p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Features to Help You Share Support
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Customizable Prayers</h3>
            <p className="text-gray-600">Create personalized prayers that reflect your genuine care and support</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Beautiful Images</h3>
            <p className="text-gray-600">Share your message with inspiring visuals that touch hearts</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Thoughtful Quotes</h3>
            <p className="text-gray-600">Find the perfect words of wisdom for any situation</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Easy Sharing</h3>
            <p className="text-gray-600">Share your prayers and messages across social media platforms</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;