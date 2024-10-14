import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaBehance, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function About() {
  const controls = useAnimation();
  const backgroundRef = useRef(null);

  useEffect(() => {
    const particles = [];
    const colors = ['#22d3ee', '#67e8f9', '#a5f3fc', '#cffafe'];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
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

        particle.x += Math.random() * 1 - 0.5;
        particle.y += Math.random() * 1 - 0.5;

        if (particle.x < 0 || particle.x > canvas.width) particle.x = Math.random() * canvas.width;
        if (particle.y < 0 || particle.y > canvas.height) particle.y = Math.random() * canvas.height;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    controls.start({ opacity: 1, y: 0 });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [controls]);

  return (
    <section id="about" className="section px-4 py-16 relative overflow-hidden">
      <canvas ref={backgroundRef} className="absolute inset-0" style={{ zIndex: -1 }} />
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          className="bg-gray-800 bg-opacity-50 rounded-lg shadow-2xl overflow-hidden backdrop-blur-md"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="md:w-1/3 relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
            <motion.img 
  src="/assets/aboutme.jpeg" 
  alt="Krishna Shekhar" 
  className="w-full h-full object-cover"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
/>
            </motion.div>
            
            <motion.div 
              className="md:w-2/3 p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-4xl font-bold text-cyan-400 mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                ABOUT ME
              </motion.h2>
              <motion.h3 
                className="text-2xl font-semibold text-white mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                KRISHNA SHEKHAR
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                I'm a web application developer with a strong focus on getting results. I have a year of solid experience working on both front-end and back-end development using the MERN stack. I'm experienced enough in using Tailwind, ReactJS, and building websites that work well on any device or browser. I know how to use GitHub, Git, and connect to APIs, and I've created user-friendly interfaces. I've built projects like knockoffs of Amazon, MakeMyTrip, and Spotify, as well as an event management app and an internship web app. I'm currently studying for my B.Tech in Computer Science and Engineering and excited to use my skills to create innovative web solutions.
              </motion.p>
              <motion.div 
                className="flex space-x-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {[FaBehance, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 15, color: "#22d3ee" }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;