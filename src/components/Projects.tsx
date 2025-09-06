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
        {/* Spaceship dashboard header */}
        <div className="re
