
import React, { useState, useEffect } from 'react';
import { siteContent } from '../content';

interface TOSGateProps {
  onAccept: () => void;
}

export const TOSGate: React.FC<TOSGateProps> = ({ onAccept }) => {
  const [agreed, setAgreed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after a short delay for a smoother entry
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark bg-opacity-90 backdrop-blur-sm transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`w-full max-w-md bg-slate-900 rounded-lg shadow-2xl p-8 text-center transition-all duration-500 ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <h2 className={`text-xl text-gray-400 font-serif mb-2 transition-all duration-500 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {siteContent.tosGate.greeting}
        </h2>
        <h1 className={`text-3xl font-serif font-bold text-white mb-4 transition-all duration-500 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {siteContent.tosGate.title}
        </h1>
        <p className={`text-gray-400 mb-6 transition-all duration-500 ease-out delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {siteContent.tosGate.description}
        </p>
        <div className={`flex items-center justify-center space-x-3 mb-8 transition-all duration-500 ease-out delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <input
            type="checkbox"
            id="tos-agree"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="h-4 w-4 rounded border-gray-600 bg-slate-800 text-brand-accent focus:ring-brand-accent"
          />
          <label htmlFor="tos-agree" className="text-sm text-gray-300">
            {siteContent.tosGate.checkboxLabel}
          </label>
        </div>
        <button
          onClick={onAccept}
          disabled={!agreed}
          className={`w-full px-8 py-3 bg-white text-black font-bold rounded-md disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-500 ease-out shadow-md hover:shadow-lg enabled:hover:scale-105 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {siteContent.tosGate.buttonText}
        </button>
      </div>
    </div>
  );
};
