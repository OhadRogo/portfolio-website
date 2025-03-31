import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Experience from "../components/landing/Experience";
import Skills from "../components/landing/Skills";
import Projects from "../components/landing/Projects";
import QuizSection from "../components/landing/QuizSection";
import Contact from "../components/landing/Contact";

export default function Landing() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'quiz', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#01235d] to-[#000B1F] text-[#F8F8F8]">
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          {['hero', 'about', 'experience', 'skills', 'projects', 'quiz', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section
                  ? 'bg-[#5de0e6] scale-125'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <QuizSection />
      <Contact />
    </div>
  );
}