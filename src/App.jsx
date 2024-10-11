import React from 'react';
import { motion } from 'framer-motion';
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Home />
        <About />
        <TechStack />
        <Projects />
        <ContactMe />
      </motion.main>
    </div>
  );
}

export default App;