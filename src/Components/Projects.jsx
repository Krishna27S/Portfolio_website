import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const projects = [
  {
    title: "Spotify Clone",
    description: "A clone of the popular music streaming platform Spotify.",
    image: "/assets/spotify.png",
    technologies: "React.js, Tailwind CSS",
    github: "https://github.com/Krishna27S/Spotify_clone.git",
    live: "https://spotify-clone-gilt-xi.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    image: "/assets/portfolio.png",
    technologies: "React.js, Tailwind CSS",
    github: "https://github.com/abhinavx04/portfolio-website",
    live: "https://portfolio-website-silk-xi-60.vercel.app/"
  },
  {
    title: "Amazon Clone",
    description: "A clone of the popular shopping platform Amazon.",
    image: "/assets/amazon.png",
    technologies: "React.js, Tailwind CSS",
    github: "https://github.com/Krishna27S/Amazon-clone.git",
    live: "https://amazon-clone-beta-woad.vercel.app/"
  },
  {
    title: "BookingGo",
    description: "A clone of the popular travel booking website MakeMyTrip.",
    image: "/assets/mmt.png",
    technologies: "HTML, CSS",
    github: "https://github.com/Krishna27S/mmt_clone.git",
    live: "https://mmt-clone-smoky.vercel.app/?vercelToolbarCode=X_lOXAvNXd-whlh"
  },
  {
    title: "Job Connect",
    description: "A clone of the Cuvette Tech website.",
    image: "/assets/cuvette.png",
    technologies: "HTML, CSS, MongoDB",
    github: "https://github.com/Krishna27S/InternXConnect.git",
    live: "https://your-cuvette-tech-clone-url.com"
  },
  {
    title: "RemoveBg Web App",
    description: "A web application to remove backgrounds from images.",
    image: "/assets/removebg.png",
    technologies: "HTML, CSS, JavaScript, API Integration",
    github: "https://github.com/Krishna27S/RemoveBg.git",
    live: "https://removebg-inky.vercel.app/"
  },
  {
    title: "Url shortner",
    description: "A web application to shorten url.",
    image: "/assets/urlshort.png",
    technologies: "HTML, CSS, JavaScript, API Integration",
    github: "https://github.com/Krishna27S/Url-shortner.git",
    // live: "https://removebg-inky.vercel.app/"
  },
  {
    title: "Events Management",
    description: "A web application to ADD,EDIT,DELETE your events.",
    image: "/assets/events.png",
    technologies: "HTML, CSS, JavaScript, API Integration, MongoDB",
    github: "https://github.com/Krishna27S/Events-API.git",
    live: "https://events-6t8m3pudm-krishna-shekhars-projects.vercel.app/"
  }
];

const ProjectCard = ({ project, isActive }) => (
  <motion.div
    className={`bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg overflow-hidden shadow-lg w-full transition-all duration-300 ${isActive ? 'scale-105 z-10' : 'scale-95 opacity-70'}`}
    whileHover={{ scale: isActive ? 1.1 : 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.img 
      src={project.image} 
      alt={project.title} 
      className="w-full h-48 object-cover"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
    <div className="p-4">
      <h4 className="text-xl font-bold text-teal-400 mb-2">{project.title}</h4>
      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
      <p className="text-gray-400 text-xs mb-4">Technologies: {project.technologies}</p>
      <div className="flex justify-between items-center">
        <motion.a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-teal-400 hover:text-teal-300"
          whileHover={{ scale: 1.1, color: "#2dd4bf" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub size={20} />
        </motion.a>
        {project.live && (
          <motion.a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-teal-400 hover:text-teal-300"
            whileHover={{ scale: 1.1, color: "#2dd4bf" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExternalLinkAlt size={20} />
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

function Projects() {
  const [activeIndex, setActiveIndex] = useState(1);

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute top-0 left-0 bg-teal-500 rounded-md p-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-black font-bold text-lg">05</span>
          </motion.div>
          <motion.h2 
            className="text-xl text-gray-400 mb-2 pl-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            some of my recent works
          </motion.h2>
          <motion.h3 
            className="text-4xl font-bold text-white pl-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            PROJECTS
          </motion.h3>
        </motion.div>
        
        <div className="relative h-[600px] overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={activeIndex}
              className="absolute inset-0 flex flex-col items-center justify-center space-y-6"
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -300 }}
              transition={{ duration: 0.5 }}
            >
              {[-1, 0, 1].map((offset) => {
                const index = (activeIndex + offset + projects.length) % projects.length;
                return (
                  <motion.div 
                    key={index} 
                    className="w-full max-w-lg"
                    initial={{ opacity: 0, y: offset * 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectCard project={projects[index]} isActive={offset === 0} />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
            <motion.button 
              className="bg-teal-500 text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
              whileHover={{ scale: 1.1, backgroundColor: "#2dd4bf" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProject}
            >
              <FaChevronUp size={20} />
            </motion.button>
            <motion.button 
              className="bg-teal-500 text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
              whileHover={{ scale: 1.1, backgroundColor: "#2dd4bf" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextProject}
            >
              <FaChevronDown size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;