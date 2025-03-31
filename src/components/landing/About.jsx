import React from 'react';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-[#5de0e6] to-[#004aad] text-transparent bg-clip-text">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300">
                As a Junior Project Manager with a strong foundation in Business Informatics from the University of Cologne, I bridge the gap between technology and business needs.
              </p>
              <p className="text-gray-300">
                My expertise lies in digital transformation, workflow optimization, and implementing innovative solutions that drive business efficiency.
              </p>
              <p className="text-gray-300">
                Currently pursuing my B.Sc. in Business Informatics while actively managing digital operations and IT projects.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#5de0e6]/10 to-[#004aad]/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#5de0e6]">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#5de0e6] rounded-full"></span>
                  <span>Based in Solingen, Germany</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#5de0e6] rounded-full"></span>
                  <span>Trilingual: German (C1), English (B2-C1), Hebrew (Native)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#5de0e6] rounded-full"></span>
                  <span>Experience in IT Security & Digital Transformation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#5de0e6] rounded-full"></span>
                  <span>Proven track record in process optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}