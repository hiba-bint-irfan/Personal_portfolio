import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Footer from '../Footer';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';
import Experience from '../Experience';
import { FaArrowUp } from 'react-icons/fa'; // Icon for the "Scroll to Top" button

function Home() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='bg-gray-950 text-white'>
      <Navbar />
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />

      {/* Scroll to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default Home;
