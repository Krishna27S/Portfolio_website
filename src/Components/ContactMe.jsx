import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactMe = () => {
  const contactInfo = [
    { icon: FaPhone, text: "+91 8252858249" },
    { icon: FaEnvelope, text: "krishnashekhar27@gmail.com" },
    { icon: FaMapMarkerAlt, text: "Chennai" }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 py-16">
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
            <span className="text-black font-bold text-lg">06</span>
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold text-white pl-12 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            CONTACT ME
          </motion.h2>
          <motion.p 
            className="text-gray-400 pl-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Let's get in touch
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-3xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="space-y-6 mb-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <div className="bg-teal-500 p-3 rounded-full">
                  <item.icon className="text-xl text-white" />
                </div>
                <p className="text-white text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="p-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h4 className="text-xl font-bold text-white mb-2">Ready to work together?</h4>
            <p className="text-white opacity-90">I'm always open for new opportunities and exciting projects.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;