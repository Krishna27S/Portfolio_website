import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { FaBehance, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaCode, FaGraduationCap, FaLaptopCode, FaBriefcase, FaMedal } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

const TimelineItem = ({ Icon, title, description, date, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-8`}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <h3 className="text-xl font-bold text-teal-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-2">{description}</p>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center z-10">
        <Icon size={24} color="white" />
      </div>
      <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
    </motion.div>
  );
};

function About() {
  const controls = useAnimation();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const fullText = "Passionate Web Developer";

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index, text]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const timelineItems = [
    { Icon: FaGraduationCap, title: "Started B.Tech", description: "Began my journey in Computer Science and Engineering", date: "2023" },
    { Icon: FaCode, title: "First Coding Project", description: "Developed my first web application using HTML, CSS, and JavaScript", date: "2023" },
    { Icon: FaLaptopCode, title: "Learned MERN Stack", description: "Mastered MongoDB, Express.js, React, and Node.js", date: "2023" },
    { Icon: FaBriefcase, title: "First Internship", description: "Gained practical experience in web development", date: "2023" },
    { Icon: FaMedal, title: "Project Showcase", description: "Built clones of Amazon, MakeMyTrip, and Spotify", date: "2024" },
  ];

  const socialLinks = [
    { Icon: FaGithub, url: "https://github.com/Krishna27S" },
    { Icon: FaTwitter, url: "https://x.com/ShekharKrishna7" },
    { Icon: FaInstagram, url: "https://www.instagram.com/krishna__shekhar/" },
    { Icon: FaLinkedin, url: "https://www.linkedin.com/in/krishna-shekhar-5007b5287/" },
  ];

  const floatingIcons = [
    { Icon: FaHtml5, color: '#E34F26' },
    { Icon: FaCss3Alt, color: '#1572B6' },
    { Icon: FaJs, color: '#F7DF1E' },
    { Icon: FaReact, color: '#61DAFB' },
    { Icon: FaNodeJs, color: '#339933' }
  ];

  return (
    <section id="about" className="relative w-full min-h-screen py-16 overflow-hidden bg-gray-900">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-teal-400 mb-4">ABOUT ME</h2>
          <h3 className="text-3xl font-semibold text-white mb-4">KRISHNA SHEKHAR</h3>
          <p className="text-xl text-teal-300">{text}</p>
        </motion.div>

        <div className="flex mb-12">
          <div className="w-1/3 pr-8">
            <motion.img 
              src="/assets/aboutme.jpeg" 
              alt="Krishna Shekhar" 
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            />
          </div>
          <motion.div 
            className="w-2/3 pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-gray-300 text-lg mb-4">
              I'm a passionate web developer with a strong focus on creating innovative and user-friendly applications. My journey in the world of coding has been exciting and full of learning experiences.
            </p>
            <p className="text-gray-300 text-lg">
              Currently pursuing my B.Tech in Computer Science and Engineering, I've honed my skills in the MERN stack and responsive web design. I love taking on challenging projects and turning ideas into reality.
            </p>
          </motion.div>
        </div>

        <div ref={timelineRef} className="relative">
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-teal-400"
            style={{ height: lineHeight, top: 0 }}
          />
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>

        <motion.div
          className="flex justify-center space-x-6 mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          {socialLinks.map(({ Icon, url }, index) => (
            <motion.a
              key={index}
              href={url}
              className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.8 }}
            >
              <Icon size={36} />
            </motion.a>
          ))}
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
    </section>
  );
}

export default About;