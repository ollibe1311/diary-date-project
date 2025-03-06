
import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Log the email - this is where you'd send to your backend in production
    console.log('Email submitted for signup:', email);
    
    // Simulate API call
    setTimeout(() => {
      setEmail('');
      setIsSubmitting(false);
      
      toast({
        title: "You're in!",
        description: "Welcome to the My Kids Events beta. Check your email for access details.",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <section className="relative pt-12 md:pt-24 pb-16 md:pb-32 overflow-hidden bg-[#faf9ef]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ffe7f1] rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#ffe7f1]/50 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="flex-1 max-w-2xl animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-[#ffe7f1] text-[#671714] rounded-full">
                Free beta access
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Turn school emails into <span className="text-[#067741] text-glow">calendar events</span> in seconds
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Never miss a school event again. My Kids Events automatically converts school emails into organized calendar invites.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-md gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-[#067741] transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="rounded-full bg-[#067741] hover:bg-[#056735] text-white px-6 py-3 h-auto w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Get Started"}
                </Button>
              </form>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#067741] w-5 h-5" />
                <span className="text-sm">Completely free during beta</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#067741] w-5 h-5" />
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#067741] w-5 h-5" />
                <span className="text-sm">Instant access</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative animate-slide-up">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 -m-4 bg-[#ffe7f1]/40 rounded-xl blur-xl animate-image-glow"></div>
              <div className="glass-card rounded-xl overflow-hidden shadow-lg relative">
                <div className="bg-[#671714] text-[#ffe7f1] px-6 py-4 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">School Email</span>
                </div>
                <div className="p-6 bg-white">
                  <div className="mb-4">
                    <div className="text-sm font-medium mb-2">From: Lincoln Elementary School</div>
                    <div className="text-sm mb-2">Subject: Upcoming School Events for May</div>
                    <div className="h-px bg-gray-200 w-full mb-3"></div>
                    <p className="text-sm mb-2">Dear Parents,</p>
                    <p className="text-sm mb-3">Please note the following important dates:</p>
                    <ul className="text-sm space-y-2 mb-3">
                      <li><strong>Parent-Teacher Conference:</strong> May 15th at 3:30 PM</li>
                      <li><strong>School Sports Day:</strong> May 22nd from 9:00 AM to 2:00 PM</li>
                      <li><strong>End of Term Assembly:</strong> May 28th at 10:30 AM</li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="shine h-10 w-40 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
