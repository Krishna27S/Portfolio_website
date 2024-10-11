import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaCode, FaDatabase, FaReact, FaNodeJs, FaGitAlt, FaCloud } from 'react-icons/fa';

const TechIcon = ({ icon: Icon, size, className }) => (
  <div className={`absolute ${className}`}>
    <Icon size={size} className="text-cyan-500 opacity-30" />
  </div>
);

const icons = [
  { Icon: FaCode, size: 100 },
  { Icon: FaReact, size: 120 },
  { Icon: FaNodeJs, size: 110 },
  { Icon: FaDatabase, size: 90 },
  { Icon: FaGitAlt, size: 105 },
  { Icon: FaCloud, size: 115 },
];

function Home() {
  const backgroundRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const iconElements = backgroundRef.current.children;
    const iconPositions = [];

    const isTooClose = (x, y) => {
      return iconPositions.some(pos => 
        Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2)) < 200
      );
    };

    gsap.utils.toArray(iconElements).forEach((icon, index) => {
      let x, y;
      do {
        x = gsap.utils.random(0, window.innerWidth);
        y = gsap.utils.random(0, window.innerHeight);
      } while (isTooClose(x, y));

      iconPositions.push({ x, y });

      gsap.set(icon, {
        x,
        y,
        scale: 0,
        opacity: 0,
      });
    });

    gsap.to(iconElements, {
      scale: 1,
      opacity: 0.6,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(iconElements, {
      scale: 1.2,
      opacity: 0.8,
      duration: 2,
      stagger: {
        each: 0.5,
        repeat: 1,
        yoyo: true,
      },
      ease: "sine.inOut",
    });

    tl.to(photoRef.current, {
      boxShadow: '0 0 30px 15px rgba(6, 182, 212, 0.8), 0 0 60px 30px rgba(6, 182, 212, 0.6)',
      duration: 2,
      repeat: 1,
      yoyo: true,
      ease: "sine.inOut",
    }, "<");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      id="home" 
      className="section relative flex items-center justify-center overflow-hidden"
    >
      <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
        {icons.map((icon, index) => (
          <TechIcon 
            key={index} 
            icon={icon.Icon} 
            size={icon.size}
            className={`icon-${index}`} 
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 max-w-6xl mx-auto w-full">
        <motion.div 
          className="text-left md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-cyan-400">
            Hey, I'm <span className="text-white">Krishna</span>
          </h1>
          <p className="text-xl mb-8 text-cyan-100">
          Web developer with a deep passion for building remarkable digital experiences.
          </p>
          <div className="space-x-4">
            <motion.button 
              className="bg-cyan-500 text-black px-6 py-2 rounded-full hover:bg-cyan-400 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-6 py-2 rounded-full hover:bg-cyan-500 hover:text-black transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Works
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div 
            ref={photoRef}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg"
            style={{
              boxShadow: '0 0 20px 10px rgba(6, 182, 212, 0.6), 0 0 40px 20px rgba(6, 182, 212, 0.4)',
              transition: 'box-shadow 0.3s ease-in-out'
            }}
          >
            <img 
              src="./src/assets/bck_img.jpeg" 
              alt="Krishna Shekhar" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;