import React from 'react';
import Hero from './components/landing/Hero';
import About from './components/landing/About';
import Experience from './components/landing/Experience';
import Skills from './components/landing/Skills';
import Projects from './components/landing/Projects';
import Contact from './components/landing/Contact';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#01235d] to-[#000B1F] text-[#F8F8F8]">
      <Hero />
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
