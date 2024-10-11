// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <motion.header 
      className={`py-4 px-6 w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-90 backdrop-blur-md' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          className="text-xl font-bold text-cyan-400"
          whileHover={{ scale: 1.05, color: "#22d3ee" }}
          transition={{ duration: 0.2 }}
        >
          Krishna Shekhar.
        </motion.div>
        <nav>
          <ul className="flex space-x-6">
            {['home', 'about', 'tech-stack', 'projects', 'contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <motion.button 
                  onClick={() => scrollToSection(item)} 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="flex space-x-4">
          {[
            { icon: FaInstagram, link: "https://www.instagram.com/krishna__shekhar/" },
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/krishna-shekhar-5007b5287/" },
            { icon: FaGithub, link: "https://github.com/Krishna27S" },  
            { icon: FaTwitter, link: "https://x.com/ShekharKrishna7" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              whileHover={{ scale: 1.2, rotate: 15, color: "#22d3ee" }}
              whileTap={{ scale: 0.9 }}
            >
              <item.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}

export default Header;