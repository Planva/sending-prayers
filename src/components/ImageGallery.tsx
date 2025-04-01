import React, { useState } from 'react';
import SocialShare from './SocialShare';

// Verified working Unsplash image URLs
const images = [
  {
    url: 'https://images.unsplash.com/photo-1504697570352-47c3bbc09af9',
    alt: 'Peaceful sunset over mountains',
    caption: 'Finding peace in moments of reflection'
  },
  {
    url: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5',
    alt: 'Candles in darkness',
    caption: 'Light in times of darkness'
  },
  {
    url: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88',
    alt: 'Rainbow after rain',
    caption: 'Hope shines through every storm'
  },
  {
    url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2',
    alt: 'Hands joined in prayer',
    caption: 'Together in prayer and support'
  },
  {
    url: 'https://images.unsplash.com/photo-1445796886651-d31a2c15f3c9',
    alt: 'Sunrise through clouds',
    caption: 'Each dawn brings new hope'
  },
  {
    url: 'https://images.unsplash.com/photo-1506252374453-ef01fa8854c3',
    alt: 'Peaceful garden path',
    caption: 'Walking the path of healing'
  },
  {
    url: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84',
    alt: 'Dove in flight',
    caption: 'Peace takes wing'
  },
  {
    url: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94',
    alt: 'Serene lake at sunrise',
    caption: 'Tranquility in nature'
  },
  {
    url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd',
    alt: 'Sunlight through forest',
    caption: 'Light guides the way'
  },
  {
    url: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6',
    alt: 'Autumn leaves',
    caption: 'Seasons of change bring growth'
  },
  {
    url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8',
    alt: 'Sunset over water',
    caption: 'Reflections of grace'
  },
  {
    url: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33',
    alt: 'Mountain peak',
    caption: 'Rising above challenges'
  },
  {
    url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
    alt: 'Stars in night sky',
    caption: 'Faith lights the darkness'
  },
  {
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    alt: 'Forest path',
    caption: 'Journey of healing'
  },
  {
    url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
    alt: 'Sunlit trees',
    caption: 'Nature\'s embrace'
  },
  {
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
    alt: 'Misty mountains',
    caption: 'Strength in solitude'
  },
  {
    url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e',
    alt: 'Peaceful meadow',
    caption: 'Fields of peace'
  },
  {
    url: 'https://images.unsplash.com/photo-1518873869727-9a0511e8f5d4',
    alt: 'Butterfly on flower',
    caption: 'Delicate moments of grace'
  },
  {
    url: 'https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2',
    alt: 'Ocean waves',
    caption: 'Waves of healing'
  },
  {
    url: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0',
    alt: 'Lightning storm',
    caption: 'Power of faith'
  },
  {
    url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    alt: 'Rainbow in clouds',
    caption: 'Promise after storm'
  },
  {
    url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    alt: 'Calm lake',
    caption: 'Still waters run deep'
  },
  {
    url: 'https://images.unsplash.com/photo-1484766280341-87861644c80d',
    alt: 'Starry night',
    caption: 'Light in darkness'
  },
  {
    url: 'https://images.unsplash.com/photo-1498598457418-36ef20772bb9',
    alt: 'Desert sunrise',
    caption: 'Dawn of hope'
  },
  {
    url: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724',
    alt: 'Lotus flower',
    caption: 'Beauty in resilience'
  },
  {
    url: 'https://images.unsplash.com/photo-1416862291207-4ca732144d83',
    alt: 'Waterfall',
    caption: 'Cleansing waters'
  },
  {
    url: 'https://images.unsplash.com/photo-1504870712357-65ea720d6078',
    alt: 'Peaceful beach',
    caption: 'Shores of serenity'
  },
  {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    alt: 'Mountain vista',
    caption: 'Peaks of possibility'
  },
  {
    url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
    alt: 'Wildflowers',
    caption: 'Beauty in simplicity'
  },
  {
    url: 'https://images.unsplash.com/photo-1486068338746-bc8c63a2d7ea',
    alt: 'Northern lights',
    caption: 'Heaven\'s dance'
  },
  {
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    alt: 'Foggy forest',
    caption: 'Mysterious paths'
  },
  {
    url: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1',
    alt: 'Mountain lake',
    caption: 'Mirror of peace'
  },
  {
    url: 'https://images.unsplash.com/photo-1504681869696-d977211a5f4c',
    alt: 'Sunset clouds',
    caption: 'Evening blessings'
  },
  {
    url: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4',
    alt: 'Winter forest',
    caption: 'Quiet strength'
  },
  {
    url: 'https://images.unsplash.com/photo-1476611317561-60117649dd94',
    alt: 'Autumn colors',
    caption: 'Seasons change'
  },
  {
    url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071',
    alt: 'Mountain sunset',
    caption: 'Day\'s blessing'
  },
  {
    url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
    alt: 'Forest stream',
    caption: 'Life flows on'
  },
  {
    url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e',
    alt: 'Spring meadow',
    caption: 'New beginnings'
  },
  {
    url: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c',
    alt: 'Starry sky',
    caption: 'Infinite possibilities'
  },
  {
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    alt: 'Forest path',
    caption: 'Path of peace'
  },
  {
    url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1',
    alt: 'Mountain range',
    caption: 'Majestic strength'
  },
  {
    url: 'https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f',
    alt: 'Sunset beach',
    caption: 'Golden moments'
  },
  {
    url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
    alt: 'Forest light',
    caption: 'Divine rays'
  },
  {
    url: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71',
    alt: 'Misty valley',
    caption: 'Valley of peace'
  },
  {
    url: 'https://images.unsplash.com/photo-1484766280341-87861644c80d',
    alt: 'Night sky',
    caption: 'Eternal light'
  },
  {
    url: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d',
    alt: 'Summer field',
    caption: 'Fields of hope'
  },
  {
    url: 'https://images.unsplash.com/photo-1416339684178-3a239570f315',
    alt: 'Mountain lake',
    caption: 'Peaceful waters'
  },
  {
    url: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
    alt: 'Wildflower field',
    caption: 'Nature\'s garden'
  },
  {
    url: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c',
    alt: 'Night stars',
    caption: 'Guiding lights'
  },
  {
    url: 'https://images.unsplash.com/photo-1469122312224-c5846569feb1',
    alt: 'Sunset forest',
    caption: 'Evening peace'
  },
  {
    url: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    alt: 'Mountain view',
    caption: 'Heights of faith'
  },
  {
    url: 'https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f',
    alt: 'Ocean sunset',
    caption: 'Endless horizon'
  }
];

const ImageGallery: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});
  const [retryCount, setRetryCount] = useState<{ [key: string]: number }>({});
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (url: string) => {
    setLoadedImages(prev => ({ ...prev, [url]: true }));
    setRetryCount(prev => {
      const newRetryCount = { ...prev };
      delete newRetryCount[url];
      return newRetryCount;
    });
    setFailedImages(prev => {
      const newFailed = new Set(prev);
      newFailed.delete(url);
      return newFailed;
    });
  };

  const handleImageError = (url: string) => {
    const maxRetries = 2;
    const currentRetries = (retryCount[url] || 0) + 1;
    
    setRetryCount(prev => ({ ...prev, [url]: currentRetries }));
    setLoadedImages(prev => ({ ...prev, [url]: false }));

    if (currentRetries <= maxRetries) {
      // Add cache-busting parameter to force reload
      const retryUrl = `${url}?retry=${currentRetries}&t=${Date.now()}`;
      const img = new Image();
      img.src = retryUrl;
      img.onload = () => handleImageLoad(url);
      img.onerror = () => {
        if (currentRetries === maxRetries) {
          setFailedImages(prev => new Set(prev).add(url));
          console.error(`Failed to load image after ${maxRetries} retries: ${url}`);
        }
      };
    } else {
      setFailedImages(prev => new Set(prev).add(url));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform"
          role="article"
          aria-label={`Prayer image card: ${image.caption}`}
        >
          <div className="relative w-full h-48 sm:h-64 bg-gray-100">
            {!failedImages.has(image.url) ? (
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt={image.alt}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  loadedImages[image.url] ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                onLoad={() => handleImageLoad(image.url)}
                onError={() => handleImageError(image.url)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <p className="text-gray-500 text-sm text-center px-4">
                  Unable to load image.<br />Please try again later.
                </p>
              </div>
            )}
            {!loadedImages[image.url] && !failedImages.has(image.url) && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="animate-pulse bg-gray-200 w-full h-full"></div>
              </div>
            )}
          </div>
          <div className="p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              {image.caption}
            </h2>
            <SocialShare text={`${image.caption} | Sending prayers and support`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;