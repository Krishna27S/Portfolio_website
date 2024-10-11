import React from 'react';
import { motion } from 'framer-motion';
import { FaBehance, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="section px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="bg-gray-800 bg-opacity-50 rounded-lg shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="md:w-1/3 bg-cyan-600"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="./src/assets/aboutme.jpeg" 
                alt="Krishna Shekhar" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="md:w-2/3 p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-cyan-400 mb-4">ABOUT ME</h2>
              <h3 className="text-2xl font-semibold text-white mb-4">KRISHNA SHEKHAR</h3>
              <p className="text-gray-300 mb-6">
              I'm a web application developer with a strong focus on getting results. I have a year of solid experience working on both front-end and back-end development using the MERN stack. I'm experienced enough in using Tailwind, ReactJS, and building websites that work well on any device or browser. I know how to use GitHub, Git, and connect to APIs, and I've created user-friendly interfaces. I've built projects like knockoffs of Amazon, MakeMyTrip, and Spotify, as well as an event management app and an internship web app. I'm currently studying for my B.Tech in Computer Science and Engineering and excited to use my skills to create innovative web solutions.
              </p>
              <div className="flex space-x-4">
                {[FaBehance, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;