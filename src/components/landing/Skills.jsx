import React from 'react';
import { motion } from "framer-motion";
import { Code2, Settings, Languages, Brain } from "lucide-react";

export default function Skills() {
  const skills = {
    technical: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    management: ["Projektmanagement", "Agile & Scrum", "Prozessoptimierung"],
    languages: [
      { name: "Deutsch", level: "C1" },
      { name: "Englisch", level: "B2-C1" }
    ],
    design: ["Figma", "UI/UX Design"]
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[#5de0e6] to-[#004aad] text-transparent bg-clip-text">
              Skills & Expertise
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-[#5de0e6]" />
                <h3 className="text-xl font-semibold">Technical Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-[#5de0e6]/10 text-[#5de0e6] text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Management Skills */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-[#5de0e6]" />
                <h3 className="text-xl font-semibold">Management Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.management.map((skill, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-[#5de0e6]/10 text-[#5de0e6] text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Language Skills */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="w-6 h-6 text-[#5de0e6]" />
                <h3 className="text-xl font-semibold">Spoken Languages</h3>
              </div>
              <div className="space-y-2">
                {skills.languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300">{lang.name}</span>
                    <span className="text-[#5de0e6]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Design Skills */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-[#5de0e6]" />
                <h3 className="text-xl font-semibold">Design Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-[#5de0e6]/10 text-[#5de0e6] text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
