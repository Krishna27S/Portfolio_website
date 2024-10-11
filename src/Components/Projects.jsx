import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: "Spotify Clone",
    description: "A clone of the popular music streaming platform Spotify.",
    image: "./src/assets/spotify.png",
    technologies: "React.js, Tailwind CSS",
    github: "https://github.com/Krishna27S/Spotify_clone.git",
    live: "https://spotify-clone-gilt-xi.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    image: "./src/assets/portfolio.png",
    technologies: "React.js, Tailwind CSS",
    github: "https://github.com/abhinavx04/portfolio-website",
    live: "https://your-portfolio-url.com"
  },
  {
    title: "Amazon Clone",
    description: "A clone of the popular shopping platform Amazon.",
    image: "./src/assets/amazon.png",
    technologies: "React.js, Tailwind CSS",
    github: "https://github.com/Krishna27S/Amazon-clone.git",
    live: "https://your-spotify-clone-url.com"
  },
  {
    title: "MakeMyTrip Clone",
    description: "A clone of the popular travel booking website MakeMyTrip.",
    image: "./src/assets/mmt.png",
    technologies: "HTML, CSS",
    github: "https://github.com/abhinavx04/makemytripclone",
    live: "https://your-makemytrip-clone-url.com"
  },
  {
    title: "Cuvette Tech Clone",
    description: "A clone of the Cuvette Tech website.",
    image: "./src/assets/cuvette.png",
    technologies: "HTML, CSS, MongoDB",
    github: "hhttps://github.com/Krishna27S/InternXConnect.git",
    live: "https://your-cuvette-tech-clone-url.com"
  },
  {
    title: "RemoveBg Web App",
    description: "A web application to remove backgrounds from images.",
    image: "./src/assets/removebg.png",
    technologies: "HTML, CSS, JavaScript, API Integration",
    github: "https://github.com/Krishna27S/RemoveBG.git",
    live: "https://removebg-inky.vercel.app/"
  },
  {
    title: "Url shortner",
    description: "A web application to shorten url.",
    image: "./src/assets/urlshort.png",
    technologies: "HTML, CSS, JavaScript, API Integration",
    github: "https://github.com/Krishna27S/Url-shortner.git",
    // live: "https://removebg-inky.vercel.app/"
  },
  {
    title: "Events Management",
    description: "A web application to ADD,EDIT,DELETE your events.",
    image: "./src/assets/events.png",
    technologies: "HTML, CSS, JavaScript, API Integration, MongoDB",
    github: "https://github.com/Krishna27S/Events-API.git",
    live: "https://events-6t8m3pudm-krishna-shekhars-projects.vercel.app/"
  }

];

const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full"
    whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(6, 182, 212, 0.2)' }}
    transition={{ duration: 0.3 }}
  >
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h4 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h4>
      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
      <p className="text-gray-400 text-xs mb-4">Technologies: {project.technologies}</p>
      <div className="flex justify-between items-center">
        <motion.a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-cyan-400 hover:text-cyan-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub size={20} />
        </motion.a>
        <motion.a 
          href={project.live} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-cyan-400 hover:text-cyan-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaExternalLinkAlt size={20} />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProjects = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProjects = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 bg-cyan-500 rounded-md p-2">
            <span className="text-black font-bold text-lg">05</span>
          </div>
          <h2 className="text-xl text-gray-400 mb-2 pl-12">some of my recent works</h2>
          <h3 className="text-4xl font-bold text-white pl-12">PROJECTS</h3>
        </motion.div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[0, 1, 2].map((offset) => {
                const project = projects[(currentIndex + offset) % projects.length];
                return <ProjectCard key={offset} project={project} />;
              })}
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 flex items-center justify-between pointer-events-none" style={{ width: 'calc(100% + 100px)' }}>
            <motion.button 
              className="pointer-events-auto bg-cyan-500 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50"
              style={{ marginLeft: '-100px' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProjects}
            >
              <FaChevronLeft size={20} />
            </motion.button>
            
            <motion.button 
              className="pointer-events-auto bg-cyan-500 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50"
              style={{ marginRight: '-50px' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextProjects}
            >
              <FaChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;