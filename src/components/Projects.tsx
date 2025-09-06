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
    },
    {
      title: 'System Integration Hub',
      description: 'Unified platform connecting multiple business systems',
      image:
        'https://images.pexels.com/photos/159711/network-cable-ethernet-computer-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Node.js', 'GraphQL', 'Docker'],
    },
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
              {/* Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl blur-sm group-hover:blur-none transition-all duration-500"></div>

              <div className="relative bg-black/90 rounded-2xl overflo
