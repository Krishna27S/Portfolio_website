import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
    live: "https://your-spotify-clone-url.com"
  },
  {
    title: "MakeMyTrip Clone",
    description: "A clone of the popular travel booking website MakeMyTrip.",
    image: "/assets/mmt.png",
    technologies: "HTML, CSS",
    github: "https://github.com/abhinavx04/makemytripclone",
    live: "https://your-makemytrip-clone-url.com"
  },
  {
    title: "Cuvette Tech Clone",
    description: "A clone of the Cuvette Tech website.",
    image: "/assets/cuvette.png",
    technologies: "HTML, CSS, MongoDB",
    github: "hhttps://github.com/Krishna27S/InternXConnect.git",
    live: "https://your-cuvette-tech-clone-url.com"
  },
  {
    title: "RemoveBg Web App",
    description: "A web application to remove backgrounds from images.",
    image: "/assets/removebg.png",
    technologies: "HTML, CSS, JavaScript, API Integration",
    github: "https://github.com/Krishna27S/RemoveBG.git",
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

const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg overflow-hidden shadow-lg w-full"
    whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(6, 182, 212, 0.3)' }}
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
      <motion.h4 
        className="text-xl font-bold text-cyan-400 mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {project.title}
      </motion.h4>
      <motion.p 
        className="text-gray-300 text-sm mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {project.description}
      </motion.p>
      <motion.p 
        className="text-gray-400 text-xs mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        Technologies: {project.technologies}
      </motion.p>
      <motion.div 
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <motion.a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-cyan-400 hover:text-cyan-300"
          whileHover={{ scale: 1.1, color: "#22d3ee" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub size={20} />
        </motion.a>
        <motion.a 
          href={project.live} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-cyan-400 hover:text-cyan-300"
          whileHover={{ scale: 1.1, color: "#22d3ee" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaExternalLinkAlt size={20} />
        </motion.a>
      </motion.div>
    </div>
  </motion.div>
);

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextProjects = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProjects = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section px-4 py-16 relative overflow-hidden">
      <canvas ref={backgroundRef} className="absolute inset-0" style={{ zIndex: -1 }} />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute top-0 left-0 bg-cyan-500 rounded-md p-2"
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
              style={{ marginLeft: '-50px' }}
              whileHover={{ scale: 1.1, backgroundColor: "#22d3ee" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProjects}
            >
              <FaChevronLeft size={20} />
            </motion.button>
            
            <motion.button 
              className="pointer-events-auto bg-cyan-500 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50"
              style={{ marginRight: '-50px' }}
              whileHover={{ scale: 1.1, backgroundColor: "#22d3ee" }}
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