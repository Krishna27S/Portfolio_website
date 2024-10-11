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
      className={`py-4 px-6 w-full fixed top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          className="text-xl font-bold text-cyan-400"
          whileHover={{ scale: 1.05 }}
        >
          Krishna Shekhar.
        </motion.div>
        <nav>
          <ul className="flex space-x-6">
            {['home', 'about', 'tech-stack', 'projects', 'contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <button 
                  onClick={() => scrollToSection(item)} 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
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
              whileHover={{ scale: 1.2, rotate: 15 }}
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