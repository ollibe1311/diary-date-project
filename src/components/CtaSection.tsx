
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CtaSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Log the email - this is where you'd send to your backend in production
    console.log('Email submitted from CTA section:', email);
    
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
    <section id="get-started" className="py-20 bg-[#ffe7f1]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#067741]">
            Join our free beta program
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            My Kids Events is currently free while in beta. Be among the first to streamline your school communications.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center max-w-md mx-auto gap-3">
            <div className="relative flex-1 w-full">
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
              {isSubmitting ? "Joining..." : "Get Started Now"}
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            Start saving time today. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
