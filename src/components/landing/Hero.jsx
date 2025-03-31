
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-[#5de0e6] to-[#004aad] rounded-full blur-[128px] opacity-20" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-[#004aad] to-[#cb6ce6] rounded-full blur-[128px] opacity-20" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Ohad Ragolsky
            <span className="block text-xl md:text-2xl font-normal mt-4 bg-gradient-to-r from-[#5de0e6] to-[#004aad] text-transparent bg-clip-text">
              Junior Project Manager & Digital Operations Enthusiast
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Currently studying Information Systems while managing IT-projects that create measurable impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:dacccc4f-547b-4291-9ede-29462bca4a7a" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-[#5de0e6] to-[#004aad] hover:opacity-90">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-[#5de0e6] text-[#5de0e6] hover:bg-[#5de0e6] hover:text-white">
                Get in Touch
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.a
          href="#about"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="block text-[#5de0e6]"
        >
          <ArrowDown className="h-8 w-8" />
        </motion.a>
      </div>
    </section>
  );
}
