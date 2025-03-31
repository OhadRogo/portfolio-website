
import React from 'react';
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Quote, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#5de0e6] to-[#004aad] text-transparent bg-clip-text">
                Let's Connect
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
              <Quote className="w-4 h-4 text-[#5de0e6]" />
              <p className="italic">If you've made it this far, let's talk about how we can work together</p>
              <Quote className="w-4 h-4 text-[#5de0e6] transform rotate-180" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#5de0e6]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#5de0e6]" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:ohad772@gmail.com" className="text-[#5de0e6] hover:underline">
                    ohad772@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#5de0e6]/10 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-[#5de0e6]" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/ohad-ragolsky" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#5de0e6] hover:underline"
                  >
                    /in/ohad-ragolsky
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#5de0e6]/10 flex items-center justify-center">
                  <Github className="w-6 h-6 text-[#5de0e6]" />
                </div>
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <a 
                    href="https://github.com/OhadRogo?tab=repositories" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#5de0e6] hover:underline"
                  >
                    /OhadRogo
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#5de0e6]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#5de0e6]" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-300">Solingen, Germany</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Ohad Ragolsky. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
