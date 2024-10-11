import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
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
  const controls = useAnimation();
  const backgroundRef = useRef(null);

  useEffect(() => {
    // ... (keep the existing particle animation code)

    controls.start({ opacity: 1, y: 0 });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [controls]);

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
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
      rotate: 0,
    },
  };

  const iconVariants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    },
  };

  return (
    <section id="tech-stack" className="section px-4 py-16 relative overflow-hidden">
      <canvas ref={backgroundRef} className="absolute inset-0" style={{ zIndex: -1 }} />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute top-0 left-0 bg-purple-500 rounded-md p-2"
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
              className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300"
              variants={tileVariants}
              custom={index}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate="visible"
              >
                <tech.icon size={60} color={tech.color} className="mb-4" />
              </motion.div>
              <motion.h3 
                className="text-lg font-semibold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                {tech.name}
              </motion.h3>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500 to-green-500 opacity-0 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;