import React, { useState } from 'react';
import { siteContent } from '../content';

export const JoinDrop: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setMessage(siteContent.joinDrop.successMessage);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setSubmitted(false);
        setMessage('');
      }, 4000);
    } else {
      setMessage(siteContent.joinDrop.errorMessage);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <section id="join" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 grainy-gradient-text animate-in">{siteContent.joinDrop.title}</h2>
          <p className="text-gray-400 mb-8 animate-in delay-100">
            {siteContent.joinDrop.description}
          </p>
          <form onSubmit={handleSubmit} className="w-full animate-in delay-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={siteContent.joinDrop.placeholder}
                className="flex-grow w-full px-4 py-3 bg-slate-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-300 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                {siteContent.joinDrop.submit}
              </button>
            </div>
          </form>
           {(submitted || message) && (
            <p className={`mt-4 text-sm transition-opacity duration-300 ${submitted ? 'grainy-gradient-text' : 'text-red-400'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};