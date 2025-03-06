
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled ? "backdrop-blur-md bg-white/80 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-xl md:text-2xl font-display font-semibold text-eucalyptus-700">
            My Kids <span className="text-foreground">Events</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/90 hover:text-eucalyptus-600 transition-colors link-underline">Features</a>
          <a href="#how-it-works" className="text-foreground/90 hover:text-eucalyptus-600 transition-colors link-underline">How It Works</a>
          <a href="#testimonials" className="text-foreground/90 hover:text-eucalyptus-600 transition-colors link-underline">Testimonials</a>
          <a href="#pricing" className="text-foreground/90 hover:text-eucalyptus-600 transition-colors link-underline">Pricing</a>
        </div>
        
        <div className="hidden md:block">
          <a 
            href="#get-started" 
            className="px-5 py-2.5 text-sm font-medium text-white bg-eucalyptus-600 rounded-full hover:bg-eucalyptus-700 transition-colors duration-300 shadow-sm"
          >
            Get Started
          </a>
        </div>
        
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-foreground py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-foreground py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-foreground py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#get-started" 
              className="inline-block px-5 py-2.5 text-sm font-medium text-white bg-eucalyptus-600 rounded-full hover:bg-eucalyptus-700 transition-colors duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
