import Home from'./components/Home/Home'
import './App.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Carousel/Portfolio';
import Palette from './components/Palette/Palette';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import { motion, useScroll } from "framer-motion";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 



export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <>
          <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
          />
    <Home />
      <About />
      <Skills />
      <Portfolio />
      <Testimonial />
      <Palette />
      <Footer />
    </>
  );
}
