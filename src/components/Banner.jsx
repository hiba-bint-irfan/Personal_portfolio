import React, { useEffect, useState } from 'react';
import headerimagee from '../assets/images/headerimage.png';

const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger the animation when the component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Function to handle scroll to the contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
    }
  };

  return (
    <section id="home-section" className="hero bg-gray-950 text-white">
      <div className="slider-item">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between md:space-x-6 p-2 md:p-4">
          
          {/* Image Section with Transition */}
          <div className={`order-last w-full md:w-1/2 lg:w-1/2 h-96 md:h-[500px] lg:h-[500px] pb-8 pt-0 transform transition duration-1000 ease-in-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'}`}>
            <img
              src={headerimagee}
              alt="headerimage"
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section with Transition */}
          <div className={`w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center items-start space-y-6 text-center md:text-left p-4 md:p-8 transform transition duration-1000 ease-in-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="subheading text-white text-1xl md:text-2xl lg:text-3xl">Hello!</span>
            <h1 className="text-5xl sm:text-4xl md:text-6xl lg:text-6xl font-bold">
              I'm <span className="text-blue-400">Hiba Irfan</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-4">
              A Full Stack Developer
            </h2>
            <div className="flex justify-center md:justify-start space-x-6">
              <button
                onClick={handleScrollToContact} // Handle click event
                className="btn bg-blue-500 text-white py-3 px-4 rounded-lg text-[20px] hover:bg-blue-600 transition"
              >
                Hire me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
