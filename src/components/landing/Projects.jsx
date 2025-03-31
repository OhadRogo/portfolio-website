
import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "ziegelmayer.net Website",
      description: "Led the development and implementation of a new corporate website, focusing on UI/UX design and stakeholder requirements.",
      period: "08.2023 - 12.2023",
      tools: ["Figma", "Canva", "Microsoft Project"],
      link: "https://www.ziegelmayer.net/"
    },
    {
      title: "Hans im Glück Mobile Menu",
      description: "UI/UX design for a custom ordering app, focusing on user experience and seamless payment integration.",
      period: "03.2023",
      tools: ["Figma", "Canva"],
      link: "https://www.figma.com/proto/9SJy6R0UOcA6N99ndvRRkP/foodApp?node-id=123-3334&starting-point-node-id=123%3A3334&t=JxgbHTRjv4B5twnn-1"
    },
    {
      title: "Clock:uno – Time Tracking Reimagined",
      description: "Led the development of a prototype time tracking system for automated time recording and analysis.",
      period: "SS 2024",
      tools: ["Figma", "CI/CD", "MoSCoW", "Agile", "Monday.com"],
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:5bea30e7-303c-47cf-ba37-df3bf781857f"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[#5de0e6] to-[#004aad] text-transparent bg-clip-text">
              Featured Projects
            </span>
          </h2>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-6 backdrop-blur-sm"
              >
                <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#5de0e6]">{project.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#5de0e6]/10 text-[#5de0e6] text-sm"
                    >
                      <Tag className="w-3 h-3" />
                      {tool}
                    </span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="text-[#5de0e6] border-[#5de0e6] hover:bg-[#5de0e6] hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
