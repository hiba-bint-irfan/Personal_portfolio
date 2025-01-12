import React, { useEffect, useState } from 'react';
import hibaResume from '../assets/hiba_resume.pdf'; // Import the PDF

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Set a threshold for mobile width (768px here)
    };

    // Run on mount
    checkIfMobile();

    // Listen for window resize to update on-the-fly
    window.addEventListener('resize', checkIfMobile);

    // Scroll visibility logic
    const handleScroll = () => {
      const section = document.getElementById('about-section');
      const rect = section.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <section id="about-section" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          {/* Left: About Text */}
          <div className="w-full lg:w-7/12 lg:pr-12">
            <h1 className="text-7xl font-bold leading-none mb-6 lg:mb-8">About</h1>
            <h2 className="text-4xl font-semibold mb-6 text-blue-400">About Me</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I am Hiba Irfan, a passionate developer with experience in Python, React, and AI development. I have worked on projects using frameworks like TensorFlow and FastAPI, including emotion and animal recognition systems. I strive to create innovative solutions and am eager to contribute to impactful projects.
            </p>
          </div>

          {/* Right: Stats & Download Button */}
          <div
            className={`w-full lg:w-5/12 mt-10 lg:mt-0 ${
              isMobile
                ? '' // No transition or transform on mobile
                : `transition-all duration-500 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`
            }`}
          >
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <ul className="text-lg space-y-4 text-gray-400">
                <li><strong className="text-white">Name:</strong> Hiba Irfan</li>
                <li><strong className="text-white">Qualification:</strong> Bachelor in Computer Science</li>
                <li className="flex justify-between">
                <span><strong className="text-white">From:</strong>  PAF-KIET</span>
                <span className="ml-auto">(2021-2025)</span>
                </li>


                <li><strong className="text-white">Location:</strong> Karachi</li>
                <li><strong className="text-white">Languages:</strong> English, Urdu</li>
                <li><strong className="text-white">Email:</strong> hibairfan003@gmail.com</li>
                <li><strong className="text-white">Phone:</strong> +92 3200204636</li>
              </ul>
              <a
                href={hibaResume} // Use the imported variable for the href
                className="inline-block bg-blue-500 text-white m-4 py-3 px-8 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
                download="hiba_resume.pdf" // This attribute makes the browser download the file instead of navigating to it
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
