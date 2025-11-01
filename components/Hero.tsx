import React, { useState, useEffect } from 'react';
import { siteContent } from '../content';

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[calc(100vh-73px)] flex items-center justify-center text-center bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay"></div>
        <div className="relative max-w-4xl mx-auto px-6 z-10">
            <h2 
              className={`text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white leading-tight mb-4 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{textShadow: '0 2px 20px rgba(0,0,0,0.7)'}}
            >
              {siteContent.hero.title}
            </h2>
            <p 
              className={`text-base md:text-lg text-gray-300 tracking-widest uppercase transition-all duration-700 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{textShadow: '0 2px 10px rgba(0,0,0,0.7)'}}
            >
              {siteContent.hero.subtitle}
            </p>
        </div>
    </section>
  );
};
