
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "As a working mom with three kids in different schools, keeping track of all their activities was a nightmare. My Kids Events has been a life-saver!",
    author: "Sarah J.",
    role: "Mother of three",
    stars: 5
  },
  {
    quote: "I used to manually enter every school event into my calendar. Now it's all automated and I've never missed a school event since using this service.",
    author: "Emily R.",
    role: "Busy parent",
    stars: 5
  },
  {
    quote: "The family sharing feature is brilliant - now both my husband and I get notifications for our daughter's school events without any extra work.",
    author: "Rebecca T.",
    role: "Parent of two",
    stars: 5
  }
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-eucalyptus-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Parents love My Kids Events
          </h2>
          <p className="text-lg opacity-90">
            Join thousands of parents who are staying organized with our service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="mb-4 text-lg italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm opacity-80">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
