import React, { useState } from 'react';
import type { Product } from '../types';
import { siteContent } from '../content';

interface SocialShareProps {
  product: Product;
}

export const SocialShare: React.FC<SocialShareProps> = ({ product }) => {
  const [copied, setCopied] = useState(false);
  
  // Using a conceptual URL since it's a showroom
  const productUrl = `https://99showroom.concept/#product/${product.id}`;
  const shareText = siteContent.socialShare.shareText(product.name);

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + productUrl)}`;
  const instagramUrl = `https://www.instagram.com`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(productUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const IconWrapper: React.FC<{ children: React.ReactNode, href?: string, onClick?: () => void, label: string }> = ({ children, href, onClick, label }) => {
    const commonClasses = "w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors duration-200";
    
    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={commonClasses} aria-label={label}>
          {children}
        </a>
      );
    }
    
    return (
      <button onClick={onClick} className={commonClasses} aria-label={label}>
        {children}
      </button>
    );
  };


  return (
    <div className="mt-8">
      <h3 className="text-sm font-medium text-gray-400 mb-3">{siteContent.socialShare.share}</h3>
      <div className="flex items-center space-x-3">
        <IconWrapper href={whatsappUrl} label="Share on WhatsApp">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.803 6.12l-1.214 4.439 4.572-1.196z M12 5.99c-3.315 0-6.012 2.698-6.012 6.013 0 1.099.309 2.14.846 3.039l-.497 1.815 1.86-.486c.892.493 1.918.773 2.991.773 3.314 0 6.011-2.697 6.011-6.012s-2.697-6.012-6.011-6.012zm-2.427 4.54c.169-.28.34-.438.514-.438.175 0 .341.006.49.006.176 0 .441.056.66.331.22.275.764.757.764 1.845s-.764 2.145-.873 2.28c-.109.135-.28.189-.49.189-.21 0-.42-.054-.645-.189-.225-.135-1.012-.47-1.928-1.191-.726-.562-1.198-1.256-1.198-1.764s.232-.738.341-.853z"></path></svg>
        </IconWrapper>
        <IconWrapper href={instagramUrl} label="Visit Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-1.082c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.688.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.667 1.095 15.259 1.081 12 1.081zM12 8.163c-2.112 0-3.837 1.725-3.837 3.837s1.725 3.837 3.837 3.837 3.837-1.725 3.837-3.837S14.112 8.163 12 8.163zm0 6.592c-1.523 0-2.755-1.232-2.755-2.755S10.477 9.245 12 9.245s2.755 1.232 2.755 2.755-1.232 2.755-2.755 2.755zm5.438-6.883c-.596 0-1.078.482-1.078 1.078s.482 1.078 1.078 1.078 1.078-.482 1.078-1.078-.482-1.078-1.078-1.078z"></path></svg>
        </IconWrapper>
        <IconWrapper onClick={handleCopyLink} label="Copy link">
          {copied ? (
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          )}
        </IconWrapper>
        {copied && <span className="text-sm text-gray-400">{siteContent.socialShare.copied}</span>}
      </div>
    </div>
  );
};