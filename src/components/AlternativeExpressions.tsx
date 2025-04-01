import React, { useState } from 'react';
import { Heart, Sparkles, Flower2, MessageSquare, Copy, Check } from 'lucide-react';

interface Expression {
  religious: string;
  nonReligious: string;
  icon: any;
}

const examples: Expression[] = [
  {
    religious: "Sending prayers for healing",
    nonReligious: "Sending healing thoughts your way",
    icon: Heart
  },
  {
    religious: "Keeping you in my prayers",
    nonReligious: "Keeping you in my thoughts",
    icon: Sparkles
  },
  {
    religious: "Praying for your recovery",
    nonReligious: "Wishing you a speedy recovery",
    icon: Flower2
  }
];

const religiousKeywords = ['pray', 'blessing', 'god', 'faith', 'amen', 'spirit'];

const AlternativeExpressions: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState<Expression | null>(null);
  const [copiedReligious, setCopiedReligious] = useState(false);
  const [copiedNonReligious, setCopiedNonReligious] = useState(false);

  const analyzeExpression = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    // Check if input contains religious keywords
    const isReligious = religiousKeywords.some(keyword => lowerInput.includes(keyword));
    
    let religious: string;
    let nonReligious: string;

    if (isReligious) {
      // Convert religious to non-religious
      religious = input;
      nonReligious = input
        .replace(/pray(ing|ers?)?/gi, 'thinking')
        .replace(/god/gi, 'the universe')
        .replace(/bless(ing|ed)?/gi, 'support')
        .replace(/faith/gi, 'hope')
        .replace(/spirit(ual)?/gi, 'inner strength')
        .replace(/amen/gi, 'take care');
    } else {
      // Convert non-religious to religious
      nonReligious = input;
      religious = input
        .replace(/thinking of you/gi, 'praying for you')
        .replace(/thoughts?/gi, 'prayers')
        .replace(/hope/gi, 'faith')
        .replace(/support(ing)?/gi, 'blessing')
        .replace(/inner strength/gi, 'spiritual strength')
        .replace(/the universe/gi, 'God');
    }

    setSuggestions({
      religious,
      nonReligious,
      icon: Heart
    });
  };

  const handleCopy = async (text: string, isReligious: boolean) => {
    await navigator.clipboard.writeText(text);
    if (isReligious) {
      setCopiedReligious(true);
      setTimeout(() => setCopiedReligious(false), 2000);
    } else {
      setCopiedNonReligious(true);
      setTimeout(() => setCopiedNonReligious(false), 2000);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Expression Analyzer</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter your message
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
              <button
                onClick={() => analyzeExpression(userInput)}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
                disabled={!userInput.trim()}
              >
                <MessageSquare className="w-5 h-5" />
                Analyze
              </button>
            </div>
          </div>

          {suggestions && (
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-purple-900">Religious Version</h3>
                  <button
                    onClick={() => handleCopy(suggestions.religious, true)}
                    className="p-2 text-purple-600 hover:bg-purple-100 rounded-full transition-colors"
                    title="Copy religious version"
                  >
                    {copiedReligious ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-purple-800">{suggestions.religious}</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-blue-900">Non-Religious Version</h3>
                  <button
                    onClick={() => handleCopy(suggestions.nonReligious, false)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors"
                    title="Copy non-religious version"
                  >
                    {copiedNonReligious ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-blue-800">{suggestions.nonReligious}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Example Expressions</h3>
        <div className="grid gap-4">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <div key={index} className="grid grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <Icon className="w-6 h-6 text-purple-500 mr-4" />
                  <p className="text-purple-900">{example.religious}</p>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-500 mr-4" />
                  <p className="text-blue-900">{example.nonReligious}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AlternativeExpressions;