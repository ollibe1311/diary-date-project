
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-background">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>
          made with ❤️ by <a 
            href="https://oliveberger.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            oliveberger.co
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
