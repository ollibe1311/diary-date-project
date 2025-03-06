
import { Clock, Calendar, BellRing, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="w-10 h-10 text-[#067741]" />,
    title: "Save Hours Every Month",
    description: "Stop manually entering school dates. Our service reduces the time spent interpreting and organizing school communications by up to 90%."
  },
  {
    icon: <Calendar className="w-10 h-10 text-[#671714]" />,
    title: "Reduce Confusion",
    description: "No more scrolling through endless email threads to find that important date. Everything is neatly organized in your calendar."
  },
  {
    icon: <BellRing className="w-10 h-10 text-[#067741]" />,
    title: "Never Miss an Event",
    description: "With events automatically in your calendar, you'll get timely reminders for every school activity, performance, or deadline."
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-[#671714]" />,
    title: "Reduce Parental Stress",
    description: "Feel confident that you have all important school dates at your fingertips. No more last-minute panic or forgotten events."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-[#faf9ef]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#067741]">
            Transform how you manage school events
          </h2>
          <p className="text-lg text-muted-foreground">
            My Kids Events dramatically reduces the time and stress of keeping track of school activities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-5 p-3 bg-white rounded-2xl shadow-md">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#067741]">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
