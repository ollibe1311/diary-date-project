
import { 
  Calendar, 
  Share2, 
  Smartphone, 
  Zap
} from 'lucide-react';

const features = [
  {
    icon: <Calendar className="w-6 h-6 text-[#671714]" />,
    title: "Automatic Calendar Creation",
    description: "Our AI extracts dates, times, and event details from school emails and creates calendar events automatically."
  },
  {
    icon: <Share2 className="w-6 h-6 text-[#671714]" />,
    title: "Family Sharing",
    description: "Share events with your partner, grandparents or caregivers to keep everyone in the loop."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-[#671714]" />,
    title: "Sync Across Devices",
    description: "Access your events on any device - seamlessly syncs with Google Calendar, Apple Calendar and more."
  },
  {
    icon: <Zap className="w-6 h-6 text-[#671714]" />,
    title: "Fast & Easy Setup",
    description: "Get started in minutes. Just forward your school emails to us and we'll do the rest."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-[#faf9ef]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#067741]">
            Designed for busy parents
          </h2>
          <p className="text-lg text-muted-foreground">
            Our features make it effortless to keep track of all your children's school events, activities, and important dates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-[#ffe7f1] hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#ffe7f1] rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#067741]">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
