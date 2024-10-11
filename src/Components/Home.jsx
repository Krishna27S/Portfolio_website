// src/components/Home.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

function Home() {
  const backgroundRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const particles = [];
    const colors = ['#22d3ee', '#67e8f9', '#a5f3fc', '#cffafe'];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const canvas = backgroundRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += Math.random() * 2 - 1;
        particle.y += Math.random() * 2 - 1;

        if (particle.x < 0 || particle.x > canvas.width) particle.x = Math.random() * canvas.width;
        if (particle.y < 0 || particle.y > canvas.height) particle.y = Math.random() * canvas.height;
      });

      requestAnimationFrame(animate);
    };

    animate();

    gsap.to(photoRef.current, {
      boxShadow: '0 0 30px 15px rgba(6, 182, 212, 0.8), 0 0 60px 30px rgba(6, 182, 212, 0.6)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="section relative flex items-center justify-center overflow-hidden min-h-screen"
      style={{
        background: 'linear-gradient(45deg, #0f172a, #1e293b)',
      }}
    >
      <canvas ref={backgroundRef} className="absolute inset-0" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 max-w-6xl mx-auto w-full">
        <motion.div 
          className="text-left md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
              whileHover={{ scale: 1.05, backgroundColor: "#22d3ee" }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-6 py-2 rounded-full hover:bg-cyan-500 hover:text-black transition duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "#22d3ee", color: "#000000" }}
              whileTap={{ scale: 0.95 }}
            >
              My Works
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div 
            ref={photoRef}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg"
            style={{
              boxShadow: '0 0 20px 10px rgba(6, 182, 212, 0.6), 0 0 40px 20px rgba(6, 182, 212, 0.4)',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="./src/assets/bck_img.jpeg"
              alt="Krishna Shekhar" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;