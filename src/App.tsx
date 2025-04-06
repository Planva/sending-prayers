import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PrayerGeneratorPage from './pages/PrayerGeneratorPage';
import GalleryPage from './pages/GalleryPage';
import QuotesPage from './pages/QuotesPage';
import AlternativesPage from './pages/AlternativesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="max-w-7xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-prayer-messages" element={<PrayerGeneratorPage />} />
            <Route path="/sending-prayers-images" element={<GalleryPage />} />
            <Route path="/inspirational-prayer-quotes" element={<QuotesPage />} />
            <Route path="/alternative-prayer-messages" element={<AlternativesPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white py-6 sm:py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-4">
              <p>Created with love and care for those in need of prayers and support</p>
            </div>
            
            <div className="border-t border-gray-800 pt-4 mt-4">
              <div className="text-center">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Friendly Links
                </h2>
                <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                  <a 
                    href="https://www.tat-test.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    TAT Test
                  </a>
                  <a 
                    href="https://www.difficult-person-test.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Thumbnail Tester
                  </a>
                  <a 
                    href="https://www.thumbnail-tester.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Calculator App
                    <a 
                    href="https://www.calculator-app.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Calculator App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;