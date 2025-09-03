import React from 'react';
import { Monitor, Bot, ShoppingCart, Link } from 'lucide-react';

const Hero: React.FC = () => {
  const services = [
    { icon: Monitor, label: 'Web Development', angle: 0 },
    { icon: Bot, label: 'AI Automation', angle: 90 },
    { icon: ShoppingCart, label: 'E-Commerce', angle: 180 },
    { icon: Link, label: 'System Integration', angle: 270 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="text-center z-10">
        {/* Central photo/planet */}
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto relative">
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
            
            {/* Photo placeholder - will be replaced with actual photo */}

            <div className="circle">
  <img src="/me.jpg" alt="My Photo" className="my-photo" />
</div>



            
            
            {/* Orbiting services */}
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.label}
                  className="absolute w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    animation: `orbit 20s linear infinite`,
                    animationDelay: `${index * 5}s`,
                    transformOrigin: '120px 120px',
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Name and title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
          Mohammed Hatem
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Web Developer & AI Automation Specialist
        </p>

        {/* CTA Button */}
        <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <span className="relative z-10">Work With Me</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Floating cosmic elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>
    </section>
  );
};

export default Hero;
