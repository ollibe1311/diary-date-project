
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const monthlyPrice = 4.99;
  const annualPrice = 49.99;
  
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with a 14-day free trial. No credit card required.
          </p>
          
          <div className="inline-flex items-center p-1 bg-eucalyptus-100 rounded-full mb-8">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                isAnnual ? 'bg-eucalyptus-600 text-white' : 'text-eucalyptus-800'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                !isAnnual ? 'bg-eucalyptus-600 text-white' : 'text-eucalyptus-800'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-eucalyptus-100 overflow-hidden">
            <div className="p-8 text-center bg-eucalyptus-50">
              <h3 className="text-2xl font-semibold mb-2">My Kids Events</h3>
              <div className="flex items-end justify-center">
                <span className="text-4xl font-bold">${isAnnual ? annualPrice : monthlyPrice}</span>
                <span className="text-muted-foreground ml-1">{isAnnual ? '/year' : '/month'}</span>
              </div>
              {isAnnual && (
                <div className="text-sm mt-2 text-eucalyptus-800 bg-eucalyptus-200 rounded-full px-3 py-1 inline-block">
                  Save $9.89 per year
                </div>
              )}
            </div>
            
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 bg-eucalyptus-100 rounded-full p-1">
                    <Check className="w-4 h-4 text-eucalyptus-600" />
                  </div>
                  <span>Unlimited email processing</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 bg-eucalyptus-100 rounded-full p-1">
                    <Check className="w-4 h-4 text-eucalyptus-600" />
                  </div>
                  <span>Sync with any calendar app</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 bg-eucalyptus-100 rounded-full p-1">
                    <Check className="w-4 h-4 text-eucalyptus-600" />
                  </div>
                  <span>Smart reminders</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 bg-eucalyptus-100 rounded-full p-1">
                    <Check className="w-4 h-4 text-eucalyptus-600" />
                  </div>
                  <span>Family sharing (up to 5 members)</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 bg-eucalyptus-100 rounded-full p-1">
                    <Check className="w-4 h-4 text-eucalyptus-600" />
                  </div>
                  <span>Premium email support</span>
                </li>
              </ul>
              
              <Button className="w-full bg-eucalyptus-600 hover:bg-eucalyptus-700 text-white rounded-full py-6">
                Start your 14-day free trial
              </Button>
              
              <p className="text-sm text-center text-muted-foreground mt-4">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
