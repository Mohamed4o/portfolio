import React from 'react';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: '1.muhammed.hatem.1@gmail.com',
      href: '1.muhammed.hatem.1@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+1 (555) 123-4567',
      href: 'https://wa.me/15551234567',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Mohammed Hatem',
      href: 'https://linkedin.com/in/mohammed-hatem',
      gradient: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Enter the Portal
        </h2>
        
        <p className="text-xl text-gray-300 mb-12">
          Ready to embark on a digital journey? Let's connect across the cosmos.
        </p>

        {/* Wormhole/Portal design */}
        <div className="relative">
          {/* Outer rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 border-2 border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 border-2 border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border border-blue-500/10 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
          </div>

          {/* Central portal */}
          <div className="relative z-10 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg rounded-full p-8 border border-cyan-500/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
            
            <div className="relative z-10 space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    style={{
                      animation: `float ${5 + index}s ease-in-out infinite`,
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    <div className={`flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r ${method.gradient} rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{method.label}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer message */}
        <div className="mt-16 text-gray-400">
          <p className="text-sm">
            © 2025 Mohammed Hatem. Crafted in the digital cosmos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
