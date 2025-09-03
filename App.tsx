import React, { useState, useEffect } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import StarField from './components/StarField';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <IntroAnimation />;
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <StarField />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;