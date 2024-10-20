import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const technologies = [
  { name: 'React', abbr: 'Re', color: '#61DAFB', info: 'A JavaScript library for building user interfaces' },
  { name: 'MongoDB', abbr: 'Mn', color: '#47A248', info: 'A document-based, distributed database' },
  { name: 'Node.js', abbr: 'Nj', color: '#339933', info: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
  { name: 'Express.js', abbr: 'Ex', color: '#ffffff', info: 'Fast, unopinionated, minimalist web framework for Node.js' },
  { name: 'Tailwind CSS', abbr: 'Tw', color: '#06B6D4', info: 'A utility-first CSS framework for rapid UI development' },
  { name: 'HTML5', abbr: 'H5', color: '#E34F26', info: 'The latest evolution of the standard that defines HTML' },
  { name: 'CSS3', abbr: 'C3', color: '#1572B6', info: 'The latest evolution of the Cascading Style Sheets language' },
  { name: 'JavaScript', abbr: 'JS', color: '#F7DF1E', info: 'A lightweight, interpreted, or just-in-time compiled programming language' },
  { name: 'C/C++', abbr: 'C++', color: '#00599C', info: 'Powerful, high-performance programming languages' },
  { name: 'Java', abbr: 'Ja', color: '#007396', info: 'A versatile, object-oriented programming language' },
  { name: 'Git', abbr: 'Gt', color: '#F05032', info: 'A distributed version control system' }
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
      rotateY: 180,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      rotateY: 0,
    },
  };

  const iconVariants = {
    hover: {
      rotateY: 180,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  const movingVariants = {
    move: (i) => ({
      y: [0, -10, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: i * 0.2,
        },
      },
    }),
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
              animate="move"
              onClick={() => setSelectedTech(selectedTech === tech.name ? null : tech.name)}
            >
              <motion.div 
                className="p-6 flex flex-col items-center justify-center"
                variants={movingVariants}
                custom={index}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4" 
                  style={{ backgroundColor: tech.color }}
                  variants={iconVariants}
                >
                  <span className="text-2xl font-bold text-white">{tech.abbr}</span>
                </motion.div>
                <motion.h3 
                  className="text-lg font-semibold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {tech.name}
                </motion.h3>
              </motion.div>
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