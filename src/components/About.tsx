import React from 'react';
import { Code, Zap, Rocket, Star } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Code, label: 'Frontend' },
    { icon: Zap, label: 'Backend' },
    { icon: Rocket, label: 'DevOps' },
    { icon: Star, label: 'AI/ML' },
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Floating card */}
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-blue-500/30 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
                About Me
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-center">
                I'm a passionate developer who transforms ideas into digital realities. 
                With expertise in modern web technologies and AI automation, I create 
                solutions that push the boundaries of what's possible in the digital universe.
              </p>
              
              <p className="text-gray-400 text-center mb-8">
                From crafting responsive web applications to implementing intelligent automation systems, 
                I help businesses navigate the ever-expanding digital cosmos.
              </p>

              {/* Orbiting skills */}
              <div className="relative flex justify-center">
                <div className="relative w-32 h-32">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.label}
                        className="absolute w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                        style={{
                          animation: `orbit 15s linear infinite`,
                          animationDelay: `${index * 3.75}s`,
                          transformOrigin: '64px 64px',
                        }}
                        title={skill.label}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;