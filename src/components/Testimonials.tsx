import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Mohammed transformed our vision into a stunning reality. His attention to detail and technical expertise are unmatched.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'CTO, InnovateCorp',
      content: 'The AI automation solutions Mohammed built for us increased our efficiency by 300%. Absolutely incredible work!',
      rating: 5,
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Founder, EcoShop',
      content: 'Our e-commerce platform exceeded all expectations. Mohammed delivered beyond what we thought was possible.',
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Cosmic Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative"
              style={{
                animation: `float ${8 + index}s ease-in-out infinite`,
                animationDelay: `${index * 1}s`,
              }}
            >
              {/* Speech bubble glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-500">
                {/* Stars rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-300 text-center mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;