
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-[#faf9ef] border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          Made with ❤️ by <a 
            href="https://oliveberger.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#067741] hover:underline transition-colors"
          >
            oliveberger.co
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
