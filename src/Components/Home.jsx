import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const backgroundRef = useRef(null);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const fullText = "Full-stack Developer";

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index, text]);

  // ... (keep the existing useEffect for background animation)

  useEffect(() => {
    if (isHovered) {
      controlsLeft.start({ width: '60%' });
      controlsRight.start({ width: '40%' });
    } else {
      controlsLeft.start({ width: '55%' });
      controlsRight.start({ width: '45%' });
    }
  }, [isHovered, controlsLeft, controlsRight]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const floatingIcons = [
    { Icon: FaHtml5, color: '#E34F26' },
    { Icon: FaCss3Alt, color: '#1572B6' },
    { Icon: FaJs, color: '#F7DF1E' },
    { Icon: FaReact, color: '#61DAFB' },
    { Icon: FaNodeJs, color: '#339933' }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas ref={backgroundRef} className="absolute inset-0" />
      
      <div className="relative z-10 w-full h-full flex">
        <motion.div
          className="h-full bg-opacity-50 bg-black flex items-center justify-center relative"
          initial={{ width: '55%' }}
          animate={controlsLeft}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="text-left p-8 max-w-lg">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm <span className="text-teal-400">Krishna</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Web developer crafting immersive digital experiences
            </motion.p>
            <motion.div
              className="space-x-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-400 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
              >
                About Me
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-teal-500 text-teal-400 px-6 py-2 rounded-md hover:bg-teal-500 hover:text-white transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
              >
                My Works
              </motion.button>
            </motion.div>
          </div>
          <motion.div
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-32 h-64 bg-teal-500 rounded-l-full"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="h-full bg-opacity-50 bg-black flex items-center justify-center relative cursor-pointer overflow-hidden"
          initial={{ width: '45%' }}
          animate={controlsRight}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div 
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/assets/bck_img2.jpeg"
              alt="Krishna Shekhar" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: isHovered ? 0.3 : 0.5 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h2 className="text-3xl font-bold mb-2">Krishna Shekhar</h2>
            <p className="text-white font-bold">{text}</p>
          </motion.div>
        </motion.div>
      </div>

      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <icon.Icon color={icon.color} />
        </motion.div>
      ))}
    </div>
  );
}

export default Home;