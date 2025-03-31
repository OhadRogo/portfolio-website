
import React from 'react';
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Evotec, Köln",
      position: "Externer IT-System administrator",
      period: "08.2024 - 04.2025",
      highlights: [
        "System-Migration support after cyber attack",
        "User support and training",
        "Technical documentation"
      ]
    },
    {
      company: "Ziegelmayer.net, Köln",
      position: "Digital Operations Manager",
      period: "01.2025 - Present",
      highlights: [
        "Leading IT security and digitalization projects",
        "Implementing Monday.com as central work-management system",
        "30% reduction in project execution time"
      ]
    },
    {
      company: "Ziegelmayer.net, Köln",
      position: "Junior Project Manager",
      period: "01.2024 - 12.2025",
      highlights: [
        "Website redesign project lead",
        "Process modeling and optimization",
        "GPT development for workflow enhancement"
      ]
    },
    {
      company: "Ziegelmayer.net, Köln",
      position: "IT Project Staff",
      period: "06.2023 - 12.2023",
      highlights: [
        "IT network project collaboration",
        "1st-Level-Support and system configuration",
        "Technical documentation creation"
      ]
    },
    {
      company: "Alexandra Kenkel PMU Düsseldorf",
      position: "Social Media Management",
      period: "06.2022 - 12.2022",
      highlights: [
        "Social media management",
        "Campaign planning and execution"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[#5de0e6] to-[#004aad] text-transparent bg-clip-text">
              Professional Journey
            </span>
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-[#5de0e6]/30"
              >
                <div className="absolute -left-[9px] top-0">
                  <div className="w-4 h-4 rounded-full bg-[#5de0e6]" />
                </div>

                <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#5de0e6]">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-gray-400 mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 bg-[#5de0e6] rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
