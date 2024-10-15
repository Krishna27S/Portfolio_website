import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeField, setActiveField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: FaPhone, text: "91+ 8252858249" },
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

        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Left Column - Contact Info */}
          <motion.div 
            className="w-full lg:w-1/2 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-6">
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
              className="mt-8 p-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-white mb-2">Ready to work together?</h4>
              <p className="text-white opacity-90">I'm always open for new opportunities and exciting projects.</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="w-full lg:w-1/2 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "message"].map((field, index) => (
                <motion.div
                  key={field}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setActiveField(field)}
                    onBlur={() => setActiveField(null)}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className={`w-full bg-gray-700 bg-opacity-50 text-white rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 ${field === "message" ? "h-32 resize-none" : ""}`}
                    required
                  />
                  <AnimatePresence>
                    {activeField === field && (
                      <motion.span
                        className="absolute bottom-2 right-2 text-teal-400"
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
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition duration-300 flex items-center justify-center overflow-hidden relative"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(20, 184, 166, 0.5)" }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;