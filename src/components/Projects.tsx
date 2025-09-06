import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'FullStack Booking System',
      description:
        'A full-stack booking system built with React and Supabase, featuring a public booking form and an admin dashboard for managing reservations.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Supabase', 'Backend'],
      liveLink: 'https://bookin-on.vercel.app',
      codeLink: 'https://github.com/Mohamed4o/bookin-app',
    },
    {
      title: 'AI Automation Dashboard',
      description: 'Intelligent workflow automation system for business processes',
      image:
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'TensorFlow', 'React'],
      liveLink: '',
      codeLink: '',
    },
    {
      title: 'System Integration Hub',
      description: 'Unified platform connecting multiple business systems',
      image:
        'https://images.pexels.com/photos/159711/network-cable-ethernet-computer-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Node.js', 'GraphQL', 'Docker'],
      liveLink: '',
      codeLink: '',
    },
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Spaceship dashboard header */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Mission Portfolio
            </h2>
            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              style={{
                animation: `float ${7 + index}s ease-in-out infinite`,
                animationDelay: `${index * 0.7}s`,
              }}
            >
              {/* Holographic border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl blur-sm group-hover:blur-none transition-all duration-500"></div>

              <div className="relative bg-black/90 rounded-2xl overflow-hidden border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-500">
                {/* Project image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full text-xs text-cyan-300 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white text-sm hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View</span>
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-sm hover:bg-gray-700 hover:border-gray-500 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

