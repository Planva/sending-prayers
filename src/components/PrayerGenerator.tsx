import React, { useState, useRef, useCallback } from 'react';
import { Copy, Check, Shuffle, Image as ImageIcon, Upload, X } from 'lucide-react';
import phrases from '../data/phrases.json';
import SocialShare from './SocialShare';

const backgroundImages = [
  {
    url: 'https://images.unsplash.com/photo-1504697570352-47c3bbc09af9',
    theme: 'light',
    position: 'center'
  },
  {
    url: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5',
    theme: 'dark',
    position: 'center'
  },
  {
    url: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88',
    theme: 'light',
    position: 'center'
  },
  {
    url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2',
    theme: 'light',
    position: 'center'
  }
];

const PrayerGenerator: React.FC = () => {
  const [category, setCategory] = useState('healing');
  const [copied, setCopied] = useState(false);
  const [selectedPhrase, setSelectedPhrase] = useState(phrases.healing[0]);
  const [selectedImage, setSelectedImage] = useState(backgroundImages[0]);
  const [showPoster, setShowPoster] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const posterRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(selectedPhrase);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    setSelectedPhrase(phrases[newCategory as keyof typeof phrases][0]);
  };

  const handlePhraseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPhrase(e.target.value);
  };

  const getRandomPhrase = () => {
    const currentPhrases = phrases[category as keyof typeof phrases];
    const randomIndex = Math.floor(Math.random() * currentPhrases.length);
    setSelectedPhrase(currentPhrases[randomIndex]);
  };

  const handleImageChange = (image: typeof backgroundImages[0]) => {
    setSelectedImage(image);
    setUploadedImage(null);
  };

  const togglePoster = () => {
    setShowPoster(!showPoster);
  };

  const handleFileUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImage(result);
        setSelectedImage({ url: '', theme: 'light', position: 'center' });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  }, []);

  const removeUploadedImage = () => {
    setUploadedImage(null);
    setSelectedImage(backgroundImages[0]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Prayer Generator</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose a Category
            </label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {Object.keys(phrases).map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select a Prayer
            </label>
            <div className="flex gap-2">
              <select
                value={selectedPhrase}
                onChange={handlePhraseChange}
                className="flex-1 rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              >
                {phrases[category as keyof typeof phrases].map((phrase, index) => (
                  <option key={index} value={phrase} className="whitespace-normal">
                    {phrase}
                  </option>
                ))}
              </select>
              <button
                onClick={getRandomPhrase}
                className="px-3 sm:px-4 py-2 bg-purple-100 text-purple-600 rounded-md hover:bg-purple-200 transition-colors flex-shrink-0"
                title="Get random prayer"
              >
                <Shuffle className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-800 mb-4 break-words">{selectedPhrase}</p>
              <div className="flex flex-wrap justify-between items-center gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <SocialShare text={selectedPhrase} />
                  <button
                    onClick={handleCopy}
                    className="p-2 text-purple-600 hover:bg-purple-50 rounded-full transition-colors"
                  >
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
                <button
                  onClick={togglePoster}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  <ImageIcon className="w-5 h-5" />
                  <span className="whitespace-nowrap">
                    {showPoster ? 'Hide Poster' : 'Create Poster'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPoster && (
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload Your Image</h3>
              <div
                className={`border-2 border-dashed rounded-lg p-6 sm:p-8 text-center cursor-pointer transition-colors ${
                  isDragging
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-300 hover:border-purple-400'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileUpload(file);
                  }}
                />
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Drag and drop your image here, or click to select
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Supports: JPG, PNG, GIF (max 5MB)
                </p>
              </div>
            </div>

            {uploadedImage && (
              <div className="relative inline-block w-full">
                <button
                  onClick={removeUploadedImage}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <img
                  src={uploadedImage}
                  alt="Uploaded background"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Or Choose from Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {backgroundImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageChange(image)}
                    className={`relative rounded-lg overflow-hidden h-24 ${
                      selectedImage === image && !uploadedImage ? 'ring-2 ring-purple-500' : ''
                    }`}
                  >
                    <img
                      src={`${image.url}?auto=format&fit=crop&w=200`}
                      alt="Background option"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div
              ref={posterRef}
              className="relative rounded-xl overflow-hidden aspect-[3/2] mb-6"
            >
              <img
                src={uploadedImage || `${selectedImage.url}?auto=format&fit=crop&w=1200&h=800`}
                alt="Prayer background"
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 flex items-center justify-center p-8 ${
                uploadedImage || selectedImage.theme === 'dark' ? 'bg-black/40' : 'bg-white/40'
              }`}>
                <p className={`text-2xl sm:text-3xl md:text-4xl text-center font-semibold break-words ${
                  uploadedImage || selectedImage.theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {selectedPhrase}
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <SocialShare text={`${selectedPhrase} | sending-prayers.com`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrayerGenerator;