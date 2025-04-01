import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Search, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Create Prayer Messages', path: '/create-prayer-messages' },
    { name: 'Prayer Images', path: '/sending-prayers-images' },
    { name: 'Prayer Quotes', path: '/inspirational-prayer-quotes' },
    { name: 'Alternative Messages', path: '/alternative-prayer-messages' },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white" role="banner">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="Sending Prayers Home"
          >
            <Heart className="w-8 h-8" aria-hidden="true" />
            <h1 className="text-2xl md:text-3xl font-bold">Sending Prayers</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white/90 hover:text-white transition-colors ${
                  location.pathname === item.path ? 'font-semibold' : ''
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search prayers..."
                aria-label="Search prayers"
                className="pl-10 pr-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden transition-all duration-200 ease-in-out`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-purple-500 text-white'
                    : 'text-white/90 hover:bg-purple-500 hover:text-white'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search prayers..."
                  aria-label="Search prayers"
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;