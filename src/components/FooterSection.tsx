
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-eucalyptus-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="text-xl font-display font-semibold text-white mb-4 inline-block">
              My Kids <span className="text-eucalyptus-400">Events</span>
            </a>
            <p className="text-eucalyptus-300 max-w-md mb-6">
              Never miss a school event again. We convert school emails into organized calendar events automatically.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-eucalyptus-800 hover:bg-eucalyptus-700 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-eucalyptus-800 hover:bg-eucalyptus-700 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-eucalyptus-800 hover:bg-eucalyptus-700 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-eucalyptus-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-eucalyptus-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-eucalyptus-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-eucalyptus-300 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-eucalyptus-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-eucalyptus-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-eucalyptus-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-eucalyptus-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-eucalyptus-800 flex flex-col md:flex-row justify-between items-center text-eucalyptus-400 text-sm">
          <div>
            &copy; {new Date().getFullYear()} My Kids Events. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <a href="mailto:hello@mykidsevents.com" className="hover:text-white transition-colors">
              hello@mykidsevents.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
