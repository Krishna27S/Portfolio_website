import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeField, setActiveField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black relative overflow-hidden">
      <canvas ref={backgroundRef} className="absolute inset-0" style={{ zIndex: 0 }} />
      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.h2 
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          CONTACT
        </motion.h2>
        <motion.div 
          className="bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-3xl p-8 shadow-2xl relative"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Futuristic border effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 rounded-3xl z-0 animate-pulse" style={{ padding: '2px' }}>
            <div className="bg-gray-900 bg-opacity-50 w-full h-full rounded-3xl"></div>
          </div>
          
          <div className="relative z-10 space-y-8">
            {/* Contact Info Section */}
            <div className="space-y-4">
              {[
                { icon: FaPhone, text: "91+ 8252858249" },
                { icon: FaEnvelope, text: "krishnashekhar27@gmail.com" },
                { icon: FaMapMarkerAlt, text: "Chennai" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center bg-gray-800 bg-opacity-50 p-4 rounded-xl overflow-hidden relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0"
                    whileHover={{ opacity: 0.2 }}
                  />
                  <div className="bg-gray-700 p-2 rounded-full mr-4 z-10">
                    <item.icon className="text-cyan-400 text-xl" />
                  </div>
                  <p className="text-white z-10">{item.text}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "message"].map((field, index) => (
                <motion.div
                  key={field}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                >
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setActiveField(field)}
                    onBlur={() => setActiveField(null)}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className={`w-full bg-gray-800 bg-opacity-50 text-white rounded-xl px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300 ${field === "message" ? "h-32 resize-none" : ""}`}
                    required
                  />
                  <AnimatePresence>
                    {activeField === field && (
                      <motion.span
                        className="absolute bottom-2 right-2 text-cyan-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <FaCheck />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition duration-300 flex items-center justify-center overflow-hidden relative"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence>
                  {!isSubmitted ? (
                    <motion.div
                      key="sendMessage"
                      className="flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="mr-2">Send Message</span>
                      <FaPaperPlane />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="messageSent"
                      className="flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="mr-2">Message Sent!</span>
                      <FaCheck />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced futuristic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-cyan-500 rounded-full opacity-5 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-blue-500 rounded-full opacity-5 filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 opacity-20"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400 opacity-20"></div>
      </div>
    </section>
  );
};

export default ContactMe;