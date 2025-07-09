import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import DownloadResume from './components/DownloadCode';
import ParticleCursor from './components/ParticleCursor';
// import SimpleCursor from './components/SimpleCursor'; // Use this for even better performance

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden cursor-none">
      <ParticleBackground />
      <ParticleCursor />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <DownloadResume />
    </div>
  );
}

export default App;