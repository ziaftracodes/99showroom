import React from 'react';
import { siteContent } from '../content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 grainy-gradient-text animate-in">{siteContent.about.title}</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 animate-in delay-100">
            {siteContent.about.p1}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed animate-in delay-200">
            {siteContent.about.p2}
          </p>
        </div>
      </div>
    </section>
  );
};