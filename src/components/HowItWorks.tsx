
import { Mail, Forward, CalendarCheck, Calendar } from 'lucide-react';

const steps = [
  {
    icon: <Forward className="w-8 h-8 text-white" />,
    title: "Forward school emails",
    description: "Simply forward any school email containing event dates to our service.",
    color: "bg-[#067741]"
  },
  {
    icon: <Mail className="w-8 h-8 text-white" />,
    title: "We process in real-time",
    description: "Our smart AI identifies dates, times, locations, and event details from school emails instantly.",
    color: "bg-[#067741]"
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-white" />,
    title: "Receive calendar events",
    description: "Events are added to your chosen calendar app immediately, so you're always organized.",
    color: "bg-[#067741]"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-[#faf9ef]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#067741]">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to never miss a school event again
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center mb-16 max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="relative">
              <div className="absolute inset-0 -m-4 bg-[#ffe7f1]/30 rounded-xl blur-xl"></div>
              <div className="bg-white rounded-xl shadow-lg p-6 relative">
                <div className="border border-gray-200 rounded-lg p-4 mb-6 bg-gray-50">
                  <div className="flex items-center mb-3">
                    <Mail className="w-5 h-5 mr-2 text-[#671714]" />
                    <div className="text-sm font-medium">School Newsletter</div>
                  </div>
                  <div className="text-sm mb-3">Dear Parents,</div>
                  <div className="text-sm mb-3">Please note the following important dates:</div>
                  <div className="text-sm mb-2"><strong>Parent-Teacher Meeting:</strong> May 15th at 3:30 PM</div>
                  <div className="text-sm mb-2"><strong>School Sports Day:</strong> May 22nd from 9:00 AM to 2:00 PM</div>
                  <div className="text-sm"><strong>End of Term Assembly:</strong> May 28th at 10:30 AM</div>
                </div>
                
                <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-full bg-[#067741] flex items-center justify-center shadow-md">
                    <Forward className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="relative">
              <div className="absolute inset-0 -m-4 bg-[#ffe7f1]/30 rounded-xl blur-xl"></div>
              <div className="glass-card rounded-xl overflow-hidden shadow-lg relative">
                <div className="bg-[#671714] text-[#ffe7f1] px-6 py-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">School Calendar</span>
                </div>
                <div className="p-6 bg-white">
                  <div className="space-y-4">
                    <div className="bg-[#ffe7f1] p-3 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="bg-[#067741] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium">15</span>
                        <div>
                          <h3 className="font-medium">Parent-Teacher Meeting</h3>
                          <p className="text-sm text-muted-foreground">3:30 PM - 4:30 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#ffe7f1] p-3 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="bg-[#067741] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium">22</span>
                        <div>
                          <h3 className="font-medium">School Sports Day</h3>
                          <p className="text-sm text-muted-foreground">9:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#ffe7f1] p-3 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="bg-[#067741] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium">28</span>
                        <div>
                          <h3 className="font-medium">End of Term Assembly</h3>
                          <p className="text-sm text-muted-foreground">10:30 AM - 12:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                {step.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-[#067741]">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
