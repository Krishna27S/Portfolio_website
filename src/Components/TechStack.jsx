import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiCplusplus } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'C/C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' }
];

function TechStack() {
  return (
    <section id="tech-stack" className="section px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 bg-cyan-500 rounded-md p-2">
            <span className="text-black font-bold text-lg">04</span>
          </div>
          <h2 className="text-4xl font-bold text-white pl-12 mb-4">Tech Stack</h2>
          <p className="text-gray-400 pl-12">Technologies I've been working with recently</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tech.icon size={60} color={tech.color} className="mb-4" />
              <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;