import React from 'react';
import { siteContent } from '../content';

export const Footer: React.FC = () => {
  const { email, subject, body, contactText, contactButton, copyright } = siteContent.footer;
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <footer className="bg-brand-dark border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center py-16 md:py-20">
          <p
            className="text-2xl md:text-3xl text-gray-400 mb-8 max-w-xl mx-auto animate-in"
            dangerouslySetInnerHTML={{ __html: contactText }}
          />
          <a
            href={mailtoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-3 grainy-gradient-bg text-brand-dark font-bold rounded-md hover:opacity-90 transition-all duration-300 shadow-lg hover:scale-105 animate-in delay-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            {contactButton}
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 gap-4 py-8 border-t border-gray-800">
          <p className="text-sm order-2 sm:order-1 animate-in delay-200">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};