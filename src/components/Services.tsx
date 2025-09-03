import React from 'react';
import { Monitor, Bot, ShoppingCart, Link } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Intelligent automation solutions that streamline workflows and boost productivity.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with payment integration and inventory management.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Link,
      title: 'System Integration',
      description: 'Seamless integration of different systems and APIs for unified workflows.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative"
                style={{
                  animation: `float ${6 + index}s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                {/* Hologram effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl blur-sm group-hover:blur-none transition-all duration-500"></div>
                
                <div className={`relative bg-gradient-to-br ${service.gradient} p-[1px] rounded-2xl group-hover:scale-105 transition-all duration-500`}>
                  <div className="bg-black/90 rounded-2xl p-6 h-full backdrop-blur-sm">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-center mb-3 text-white">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-center text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;