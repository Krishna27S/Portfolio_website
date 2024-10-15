import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiCplusplus } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: FaReact, color: '#61DAFB', info: 'A JavaScript library for building user interfaces' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', info: 'A document-based, distributed database' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', info: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff', info: 'Fast, unopinionated, minimalist web framework for Node.js' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', info: 'A utility-first CSS framework for rapid UI development' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', info: 'The latest evolution of the standard that defines HTML' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', info: 'The latest evolution of the Cascading Style Sheets language' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', info: 'A lightweight, interpreted, or just-in-time compiled programming language' },
  { name: 'C/C++', icon: SiCplusplus, color: '#00599C', info: 'Powerful, high-performance programming languages' },
  { name: 'Java', icon: FaJava, color: '#007396', info: 'A versatile, object-oriented programming language' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', info: 'A distributed version control system' }
];

function TechStack() {
  const [selectedTech, setSelectedTech] = useState(null);

  const tileVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.05,
      rotateY: 5,
      rotateX: 5,
      boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
      rotateY: 0,
      rotateX: 0,
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  return (
    <section id="tech-stack" className="section min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute top-0 left-0 bg-teal-500 rounded-md p-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-black font-bold text-lg">04</span>
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold text-white pl-12 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Tech Stack
          </motion.h2>
          <motion.p 
            className="text-gray-400 pl-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Technologies I've been working with recently
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg overflow-hidden transition-all duration-300"
              variants={tileVariants}
              custom={index}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedTech(selectedTech === tech.name ? null : tech.name)}
            >
              <div className="p-6 flex flex-col items-center justify-center">
                <tech.icon size={60} color={tech.color} className="mb-4" />
                <motion.h3 
                  className="text-lg font-semibold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {tech.name}
                </motion.h3>
              </div>
              <AnimatePresence>
                {selectedTech === tech.name && (
                  <motion.div
                    variants={infoVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-300 text-sm">{tech.info}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;