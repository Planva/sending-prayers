import React from 'react';
import { Twitter, Facebook, Wheat as Whatsapp, Link2, Check } from 'lucide-react';

interface SocialShareProps {
  text: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ text }) => {
  const [copied, setCopied] = React.useState(false);
  const encodedText = encodeURIComponent(text);
  const url = 'https://sending-prayers.com';
  const encodedUrl = encodeURIComponent(url);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 sm:p-2 text-blue-400 hover:bg-blue-50 rounded-full transition-colors"
      >
        <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 sm:p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
      >
        <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
      <a
        href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 sm:p-2 text-green-500 hover:bg-green-50 rounded-full transition-colors"
      >
        <Whatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
      <button
        onClick={handleCopy}
        className="p-1.5 sm:p-2 text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
      >
        {copied ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : <Link2 className="w-4 h-4 sm:w-5 sm:h-5" />}
      </button>
    </div>
  );
};

export default SocialShare;